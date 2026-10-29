/** [YZN-261029-027] Authorship: YUZAKI NASA (@ঔৣ፝ N4!) · PLAY-CODE / CodePlay */
// PLAY-CODE @N4! 10 Real-World TypeScript Projects Dataset
window.TYPESCRIPT_PROJECTS = [
  {
    id: 1,
    title: "TypeScript Calculator",
    badge: "Core Operations",
    description: "A fully typed arithmetic calculator supporting operation queues, operator precedence, float precision guards, error handling, and keyboard input.",
    features: ["Strict numeric operations", "Safe evaluation without eval()", "Memory registers & history log", "Division by zero guard"],
    techStack: ["TypeScript 5.x", "DOM Events", "CSS Grid"],
    typeDefinitions: `type Operator = "+" | "-" | "*" | "/" | "%" | "^";

interface CalculationState {
    previousOperand: string;
    currentOperand: string;
    operation: Operator | null;
    overwriteNext: boolean;
    history: string[];
}

interface ICalculator {
    clear(): void;
    delete(): void;
    appendNumber(number: string): void;
    chooseOperation(operation: Operator): void;
    compute(): void;
    getDisplay(): string;
}`,
    implementationCode: `class SafeCalculator implements ICalculator {
    private state: CalculationState = {
        previousOperand: "",
        currentOperand: "0",
        operation: null,
        overwriteNext: false,
        history: []
    };

    public clear(): void {
        this.state.previousOperand = "";
        this.state.currentOperand = "0";
        this.state.operation = null;
        this.state.overwriteNext = false;
    }

    public delete(): void {
        if (this.state.currentOperand === "0") return;
        if (this.state.currentOperand.length === 1) {
            this.state.currentOperand = "0";
        } else {
            this.state.currentOperand = this.state.currentOperand.slice(0, -1);
        }
    }

    public appendNumber(number: string): void {
        if (number === "." && this.state.currentOperand.includes(".")) return;
        if (this.state.currentOperand === "0" && number !== ".") {
            this.state.currentOperand = number;
        } else if (this.state.overwriteNext) {
            this.state.currentOperand = number;
            this.state.overwriteNext = false;
        } else {
            this.state.currentOperand += number;
        }
    }

    public chooseOperation(operation: Operator): void {
        if (this.state.currentOperand === "") return;
        if (this.state.previousOperand !== "") {
            this.compute();
        }
        this.state.operation = operation;
        this.state.previousOperand = this.state.currentOperand;
        this.state.currentOperand = "";
    }

    public compute(): void {
        const prev = parseFloat(this.state.previousOperand);
        const current = parseFloat(this.state.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        let computation: number = 0;
        switch (this.state.operation) {
            case "+": computation = prev + current; break;
            case "-": computation = prev - current; break;
            case "*": computation = prev * current; break;
            case "/": 
                if (current === 0) {
                    this.state.currentOperand = "Error: Div / 0";
                    this.state.previousOperand = "";
                    this.state.operation = null;
                    return;
                }
                computation = prev / current; 
                break;
            case "%": computation = prev % current; break;
            case "^": computation = Math.pow(prev, current); break;
        }

        const log = \`\${prev} \${this.state.operation} \${current} = \${computation}\`;
        this.state.history.unshift(log);
        this.state.currentOperand = String(computation);
        this.state.operation = null;
        this.state.previousOperand = "";
        this.state.overwriteNext = true;
    }

    public getDisplay(): string {
        return this.state.currentOperand || "0";
    }
}`
  },
  {
    id: 2,
    title: "Todo List Application",
    badge: "State & Storage",
    description: "An organized task management app featuring priority labels, category tags, due date tracking, filtered views, and typed LocalStorage persistence.",
    features: ["Strict Task model", "Priority badges (High, Medium, Low)", "Filter by status (All, Active, Completed)", "LocalStorage sync"],
    techStack: ["TypeScript 5.x", "JSON Storage", "DOM API"],
    typeDefinitions: `type Priority = "low" | "medium" | "high";

interface TaskItem {
    id: string;
    title: string;
    completed: boolean;
    priority: Priority;
    createdAt: string;
    dueDate?: string;
}

type TaskFilter = "all" | "active" | "completed";

interface TaskRepository {
    getAll(): TaskItem[];
    add(task: Omit<TaskItem, "id" | "createdAt">): TaskItem;
    toggle(id: string): boolean;
    remove(id: string): void;
    filter(filter: TaskFilter): TaskItem[];
}`,
    implementationCode: `class LocalTaskRepository implements TaskRepository {
    private storageKey = "playcode_ts_tasks";

    public getAll(): TaskItem[] {
        const raw = localStorage.getItem(this.storageKey);
        return raw ? JSON.parse(raw) : [];
    }

    private save(tasks: TaskItem[]): void {
        localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    }

    public add(data: Omit<TaskItem, "id" | "createdAt">): TaskItem {
        const tasks = this.getAll();
        const newTask: TaskItem = {
            id: \`tsk_\${Date.now()}_\${Math.random().toString(36).substring(2, 6)}\`,
            createdAt: new Date().toISOString(),
            ...data
        };
        tasks.unshift(newTask);
        this.save(tasks);
        return newTask;
    }

    public toggle(id: string): boolean {
        const tasks = this.getAll();
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.save(tasks);
            return task.completed;
        }
        return false;
    }

    public remove(id: string): void {
        const tasks = this.getAll().filter(t => t.id !== id);
        this.save(tasks);
    }

    public filter(filter: TaskFilter): TaskItem[] {
        const tasks = this.getAll();
        if (filter === "active") return tasks.filter(t => !t.completed);
        if (filter === "completed") return tasks.filter(t => t.completed);
        return tasks;
    }
}`
  },
  {
    id: 3,
    title: "Student Management System",
    badge: "CRUD & Analytics",
    description: "An academic registry tracking student enrollments, course grades, GPA calculations, academic standing metrics, and honor roll filtering.",
    features: ["Typed Student record schema", "Automated GPA computation", "Search by name or student ID", "Honor roll filter (GPA >= 3.5)"],
    techStack: ["TypeScript 5.x", "In-Memory Store", "Analytical Math"],
    typeDefinitions: `interface CourseGrade {
    courseCode: string;
    credits: number;
    gradePoint: number; // 0.0 - 4.0 scale
}

interface StudentRecord {
    id: string;
    fullName: string;
    email: string;
    major: string;
    courses: CourseGrade[];
    gpa: number;
    standing: "Honor Roll" | "Good Standing" | "Academic Probation";
}

interface IStudentService {
    addStudent(name: string, email: string, major: string): StudentRecord;
    addGrade(studentId: string, course: CourseGrade): void;
    calculateGpa(courses: CourseGrade[]): number;
    getHonorRoll(): StudentRecord[];
}`,
    implementationCode: `class StudentService implements IStudentService {
    private students: Map<string, StudentRecord> = new Map();

    public addStudent(fullName: string, email: string, major: string): StudentRecord {
        const id = \`STU-\${1000 + this.students.size + 1}\`;
        const student: StudentRecord = {
            id,
            fullName,
            email,
            major,
            courses: [],
            gpa: 0.0,
            standing: "Good Standing"
        };
        this.students.set(id, student);
        return student;
    }

    public addGrade(studentId: string, course: CourseGrade): void {
        const student = this.students.get(studentId);
        if (!student) throw new Error(\`Student \${studentId} not found\`);
        student.courses.push(course);
        student.gpa = this.calculateGpa(student.courses);
        student.standing = student.gpa >= 3.5 ? "Honor Roll" : (student.gpa < 2.0 ? "Academic Probation" : "Good Standing");
    }

    public calculateGpa(courses: CourseGrade[]): number {
        if (courses.length === 0) return 0.0;
        const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
        const totalPoints = courses.reduce((sum, c) => sum + (c.gradePoint * c.credits), 0);
        return Math.round((totalPoints / totalCredits) * 100) / 100;
    }

    public getHonorRoll(): StudentRecord[] {
        return Array.from(this.students.values()).filter(s => s.gpa >= 3.5);
    }
}`
  },
  {
    id: 4,
    title: "Expense Tracker",
    badge: "Financial Ledger",
    description: "A double-entry financial ledger recording income and expense transactions, category breakdown charts, monthly budgets, and balance metrics.",
    features: ["Typed Transaction model", "Category totals aggregation", "Real-time net balance compute", "Income vs expense breakdown"],
    techStack: ["TypeScript 5.x", "Functional Reductions", "Ledger Math"],
    typeDefinitions: `type TransactionType = "income" | "expense";
type ExpenseCategory = "Cloud & Hosting" | "Office & Hardware" | "SaaS Subscriptions" | "Marketing" | "Payroll";

interface Transaction {
    id: string;
    description: string;
    amount: number;
    type: TransactionType;
    category: ExpenseCategory;
    date: string;
}

interface FinancialSummary {
    totalIncome: number;
    totalExpense: number;
    netBalance: number;
    byCategory: Record<ExpenseCategory, number>;
}`,
    implementationCode: `class ExpenseTrackerService {
    private transactions: Transaction[] = [];

    public addTransaction(t: Omit<Transaction, "id">): Transaction {
        const record: Transaction = {
            id: \`txn_\${Date.now()}\`,
            ...t
        };
        this.transactions.unshift(record);
        return record;
    }

    public getSummary(): FinancialSummary {
        const summary: FinancialSummary = {
            totalIncome: 0,
            totalExpense: 0,
            netBalance: 0,
            byCategory: {
                "Cloud & Hosting": 0,
                "Office & Hardware": 0,
                "SaaS Subscriptions": 0,
                "Marketing": 0,
                "Payroll": 0
            }
        };

        for (const t of this.transactions) {
            if (t.type === "income") {
                summary.totalIncome += t.amount;
            } else {
                summary.totalExpense += t.amount;
                summary.byCategory[t.category] = (summary.byCategory[t.category] || 0) + t.amount;
            }
        }

        summary.netBalance = summary.totalIncome - summary.totalExpense;
        return summary;
    }
}`
  },
  {
    id: 5,
    title: "Weather Dashboard",
    badge: "Async API",
    description: "A modern typed weather client consuming climate data, temperature scale conversion (C/F), 5-day forecasts, and loading/error state machines.",
    features: ["Discriminated Async State", "Strongly typed Weather API response", "Metric / Imperial unit toggling", "Condition icons mapping"],
    techStack: ["TypeScript 5.x", "Fetch API", "Discriminated Unions"],
    typeDefinitions: `interface Coordinates {
    lat: number;
    lon: number;
}

interface WeatherReport {
    cityName: string;
    country: string;
    temperatureCelsius: number;
    condition: "Sunny" | "Cloudy" | "Rainy" | "Snowy" | "Thunderstorm";
    humidity: number;
    windSpeedKmh: number;
    updatedAt: string;
}

type WeatherState = 
    | { status: "idle" }
    | { status: "loading" }
    | { status: "success"; data: WeatherReport }
    | { status: "error"; error: string };`,
    implementationCode: `class WeatherService {
    public convertToFahrenheit(celsius: number): number {
        return Math.round((celsius * 9) / 5 + 32);
    }

    public async fetchWeather(city: string): Promise<WeatherReport> {
        // Mock robust typed response
        const mockDatabase: Record<string, WeatherReport> = {
            "tokyo": { cityName: "Tokyo", country: "JP", temperatureCelsius: 16, condition: "Sunny", humidity: 45, windSpeedKmh: 12, updatedAt: new Date().toLocaleTimeString() },
            "san francisco": { cityName: "San Francisco", country: "US", temperatureCelsius: 14, condition: "Cloudy", humidity: 72, windSpeedKmh: 18, updatedAt: new Date().toLocaleTimeString() },
            "london": { cityName: "London", country: "UK", temperatureCelsius: 11, condition: "Rainy", humidity: 85, windSpeedKmh: 24, updatedAt: new Date().toLocaleTimeString() }
        };

        const normalized = city.trim().toLowerCase();
        const found = mockDatabase[normalized];
        if (!found) {
            throw new Error(\`City "\${city}" not found in weather registry.\`);
        }
        return found;
    }
}`
  },
  {
    id: 6,
    title: "Form Validation System",
    badge: "Form Architecture",
    description: "An enterprise form validation engine featuring composable validator rules, real-time error tracking, blur/change state guards, and typed form models.",
    features: ["Custom validation rule composition", "Real-time field error mapping", "Regex email & strong password validation", "Touched / pristine state tracking"],
    techStack: ["TypeScript 5.x", "Generics", "Higher-Order Validators"],
    typeDefinitions: `type ValidatorFn<T> = (value: T) => string | null;

interface FieldState<T> {
    value: T;
    error: string | null;
    isTouched: boolean;
    isValid: boolean;
}

interface RegistrationFormModel {
    username: string;
    email: string;
    password: string;
    termsAccepted: boolean;
}

type FormValidationResult<T> = {
    isValid: boolean;
    errors: Record<keyof T, string | null>;
};`,
    implementationCode: `class FormValidator {
    public static required(msg = "Field is required"): ValidatorFn<string> {
        return (val) => (val && val.trim().length > 0 ? null : msg);
    }

    public static minLength(min: number, msg?: string): ValidatorFn<string> {
        return (val) => (val && val.length >= min ? null : (msg || \`Must be at least \${min} characters\`));
    }

    public static email(msg = "Invalid email address"): ValidatorFn<string> {
        const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return (val) => (regex.test(val) ? null : msg);
    }

    public static passwordStrength(): ValidatorFn<string> {
        return (val) => {
            if (!val || val.length < 8) return "Password must be at least 8 characters";
            if (!/[A-Z]/.test(val)) return "Password must include an uppercase letter";
            if (!/[0-9]/.test(val)) return "Password must include a digit";
            return null;
        };
    }
}`
  },
  {
    id: 7,
    title: "API Data Fetcher",
    badge: "Generic Networking",
    description: "A reusable typed HTTP client with response validation, generic query parameters, authorization header injectors, and resilient retry logic.",
    features: ["Generic response unwrapping", "Custom timeout & retry wrapper", "Bearer authentication injection", "Status code error guards"],
    techStack: ["TypeScript 5.x", "Generics", "Async/Await"],
    typeDefinitions: `interface RequestOptions {
    headers?: Record<string, string>;
    timeoutMs?: number;
    retries?: number;
}

interface ApiResponseEnvelope<T> {
    data: T;
    status: number;
    ok: boolean;
    durationMs: number;
}

interface IApiClient {
    get<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponseEnvelope<T>>;
    post<T, B>(endpoint: string, body: B, options?: RequestOptions): Promise<ApiResponseEnvelope<T>>;
}`,
    implementationCode: `class TypedApiClient implements IApiClient {
    constructor(private baseUrl: string, private defaultHeaders: Record<string, string> = {}) {}

    public async get<T>(endpoint: string, options: RequestOptions = {}): Promise<ApiResponseEnvelope<T>> {
        const start = Date.now();
        const url = \`\${this.baseUrl}\${endpoint}\`;
        
        // Mock simulated network latency & typed payload
        await new Promise(r => setTimeout(r, 60));
        
        return {
            data: { message: "Mock API Fetcher executed successfully", endpoint } as unknown as T,
            status: 200,
            ok: true,
            durationMs: Date.now() - start
        };
    }

    public async post<T, B>(endpoint: string, body: B, options: RequestOptions = {}): Promise<ApiResponseEnvelope<T>> {
        const start = Date.now();
        return {
            data: { receivedBody: body, status: "created" } as unknown as T,
            status: 201,
            ok: true,
            durationMs: Date.now() - start
        };
    }
}`
  },
  {
    id: 8,
    title: "CRUD Application",
    badge: "Repository Architecture",
    description: "An entity management system featuring a generic in-memory repository, typed mutations, filtering criteria, and pagination.",
    features: ["Generic Entity Repository <T extends BaseEntity>", "Create, Read, Update, Delete methods", "Typed pagination & sorting", "Search filtering"],
    techStack: ["TypeScript 5.x", "Generic Repository", "OOP"],
    typeDefinitions: `interface BaseEntity {
    id: string;
    createdAt: string;
    updatedAt: string;
}

interface ArticleRecord extends BaseEntity {
    title: string;
    content: string;
    tags: string[];
    isPublished: boolean;
}

interface PaginationQuery {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}

interface PaginatedResult<T> {
    items: T[];
    total: number;
    page: number;
    totalPages: number;
}`,
    implementationCode: `class GenericRepository<T extends BaseEntity> {
    private items: Map<string, T> = new Map();

    public create(data: Omit<T, "id" | "createdAt" | "updatedAt">): T {
        const id = \`ent_\${Date.now()}_\${Math.random().toString(36).substring(2, 6)}\`;
        const timestamp = new Date().toISOString();
        const entity = {
            id,
            createdAt: timestamp,
            updatedAt: timestamp,
            ...data
        } as T;
        this.items.set(id, entity);
        return entity;
    }

    public findById(id: string): T | null {
        return this.items.get(id) || null;
    }

    public update(id: string, patch: Partial<Omit<T, "id" | "createdAt">>): T | null {
        const existing = this.items.get(id);
        if (!existing) return null;
        const updated = {
            ...existing,
            ...patch,
            updatedAt: new Date().toISOString()
        };
        this.items.set(id, updated);
        return updated;
    }

    public delete(id: string): boolean {
        return this.items.delete(id);
    }

    public list(): T[] {
        return Array.from(this.items.values());
    }
}`
  },
  {
    id: 9,
    title: "TypeScript Quiz Application",
    badge: "Interactive Assessment",
    description: "An interactive assessment platform testing TypeScript knowledge across all levels, featuring timed questions, immediate feedback, and score analysis.",
    features: ["Strongly typed Question & Option models", "Score tallying & performance tiers", "Detailed explanation for each answer", "Category-specific quiz sets"],
    techStack: ["TypeScript 5.x", "State Machine", "Score Analytics"],
    typeDefinitions: `interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
}

interface QuizResult {
    totalQuestions: number;
    correctAnswers: number;
    percentage: number;
    grade: "Master" | "Proficient" | "Novice";
}`,
    implementationCode: `class QuizEngine {
    private questions: QuizQuestion[] = [
        {
            id: 1,
            question: "What is the return type of a function that throws an error and never returns?",
            options: ["void", "undefined", "never", "null"],
            correctIndex: 2,
            explanation: "The 'never' type represents values that never occur, such as a function that always throws an exception.",
            difficulty: "Beginner"
        },
        {
            id: 2,
            question: "Which keyword creates native ECMAScript runtime-private class fields?",
            options: ["private", "#", "readonly", "protected"],
            correctIndex: 1,
            explanation: "Prefixing a field with # creates hard-private fields enforced by the JavaScript engine at runtime.",
            difficulty: "Intermediate"
        },
        {
            id: 3,
            question: "What does the 'infer' keyword do in TypeScript?",
            options: ["Infers variables", "Extracts sub-types inside conditional types", "Disables strict mode", "Defines a macro"],
            correctIndex: 1,
            explanation: "'infer' declares a type variable within the 'extends' clause of a conditional type to extract sub-types.",
            difficulty: "Advanced"
        }
    ];

    private userAnswers: number[] = [];

    public getQuestions(): QuizQuestion[] {
        return this.questions;
    }

    public submitAnswer(questionIndex: number, optionIndex: number): void {
        this.userAnswers[questionIndex] = optionIndex;
    }

    public calculateResult(): QuizResult {
        let correct = 0;
        this.questions.forEach((q, idx) => {
            if (this.userAnswers[idx] === q.correctIndex) correct++;
        });

        const percentage = Math.round((correct / this.questions.length) * 100);
        const grade = percentage >= 80 ? "Master" : (percentage >= 50 ? "Proficient" : "Novice");

        return {
            totalQuestions: this.questions.length,
            correctAnswers: correct,
            percentage,
            grade
        };
    }
}`
  },
  {
    id: 10,
    title: "Mini Task Management System",
    badge: "Kanban Workflow",
    description: "A drag-and-drop Kanban task workflow board supporting columns (Backlog, In Progress, Review, Done), task priority, and move workflows.",
    features: ["Typed Kanban column workflow", "Move tasks forward and backward", "Priority color coding", "Task counter per column"],
    techStack: ["TypeScript 5.x", "Workflow State Machine", "DOM Events"],
    typeDefinitions: `type KanbanStatus = "backlog" | "in_progress" | "review" | "done";

interface KanbanCard {
    id: string;
    title: string;
    description: string;
    status: KanbanStatus;
    assignee: string;
    storyPoints: number;
}

interface ColumnDefinition {
    id: KanbanStatus;
    title: string;
    order: number;
}`,
    implementationCode: `class KanbanBoardService {
    private cards: KanbanCard[] = [
        { id: "KB-1", title: "Setup TypeScript 5.9 Compiler", description: "Configure tsconfig.json with strict mode", status: "done", assignee: "NASA-YUZAKI", storyPoints: 3 },
        { id: "KB-2", title: "Build 265 Curriculum Lessons", description: "Generate comprehensive lessons across 16 categories", status: "in_progress", assignee: "Dev Team", storyPoints: 8 },
        { id: "KB-3", title: "Integrate 10 Real-World Projects", description: "Embed working interactive canvases in Projects page", status: "in_progress", assignee: "Frontend Lead", storyPoints: 5 },
        { id: "KB-4", title: "End-to-End Build Verification", description: "Run vite build and compile tests", status: "backlog", assignee: "QA Lead", storyPoints: 2 }
    ];

    public getCardsByStatus(status: KanbanStatus): KanbanCard[] {
        return this.cards.filter(c => c.status === status);
    }

    public moveCard(id: string, nextStatus: KanbanStatus): void {
        const card = this.cards.find(c => c.id === id);
        if (card) {
            card.status = nextStatus;
        }
    }

    public addCard(title: string, description: string, assignee: string, points: number): KanbanCard {
        const newCard: KanbanCard = {
            id: \`KB-\${this.cards.length + 1}\`,
            title,
            description,
            status: "backlog",
            assignee,
            storyPoints: points
        };
        this.cards.push(newCard);
        return newCard;
    }
}`
  }
];
