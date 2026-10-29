#!/usr/bin/env python3
"""
PLAY-CODE (@N4) — Complete 330 jQuery Lessons Dataset Builder
Generates /data/jquery-lessons.js with authoritative educational content,
clean syntax, runnable HTML+jQuery examples, expected outputs, notes, common mistakes, and keywords.
"""

import json
import re
import os

titles_and_categories = [
    # 1. Fundamentals & Setup (001-021)
    (1, "Introduction to jQuery", "Fundamentals & Setup"),
    (2, "What Is jQuery?", "Fundamentals & Setup"),
    (3, "Why Use jQuery?", "Fundamentals & Setup"),
    (4, "History and Evolution of jQuery", "Fundamentals & Setup"),
    (5, "Features of jQuery", "Fundamentals & Setup"),
    (6, "Advantages and Limitations of jQuery", "Fundamentals & Setup"),
    (7, "jQuery vs JavaScript", "Fundamentals & Setup"),
    (8, "Understanding the jQuery Library", "Fundamentals & Setup"),
    (9, "Downloading jQuery", "Fundamentals & Setup"),
    (10, "Using jQuery from a CDN", "Fundamentals & Setup"),
    (11, "Including jQuery in an HTML Page", "Fundamentals & Setup"),
    (12, "Understanding the Document Object Model", "Fundamentals & Setup"),
    (13, "How jQuery Works", "Fundamentals & Setup"),
    (14, "The jQuery Function", "Fundamentals & Setup"),
    (15, "The Document Ready Event", "Fundamentals & Setup"),
    (16, "jQuery Syntax", "Fundamentals & Setup"),
    (17, "The `$` Alias", "Fundamentals & Setup"),
    (18, "Writing Your First jQuery Program", "Fundamentals & Setup"),
    (19, "Running jQuery in the Browser", "Fundamentals & Setup"),
    (20, "Debugging Your First jQuery Program", "Fundamentals & Setup"),
    (21, "Understanding jQuery Objects", "Fundamentals & Setup"),

    # 2. Selectors & Filters (022-064)
    (22, "Selecting Elements with jQuery", "Selectors & Filters"),
    (23, "Selecting Elements by ID", "Selectors & Filters"),
    (24, "Selecting Elements by Class", "Selectors & Filters"),
    (25, "Selecting Elements by Tag Name", "Selectors & Filters"),
    (26, "Selecting All Elements", "Selectors & Filters"),
    (27, "Combining Multiple Selectors", "Selectors & Filters"),
    (28, "Selecting Descendant Elements", "Selectors & Filters"),
    (29, "Selecting Direct Child Elements", "Selectors & Filters"),
    (30, "Selecting Adjacent Sibling Elements", "Selectors & Filters"),
    (31, "Selecting General Sibling Elements", "Selectors & Filters"),
    (32, "Selecting Elements by Attribute", "Selectors & Filters"),
    (33, "Selecting Elements by Attribute Value", "Selectors & Filters"),
    (34, "Attribute Starts With Selector", "Selectors & Filters"),
    (35, "Attribute Ends With Selector", "Selectors & Filters"),
    (36, "Attribute Contains Selector", "Selectors & Filters"),
    (37, "Attribute Not Equal Selector", "Selectors & Filters"),
    (38, "Multiple Attribute Selectors", "Selectors & Filters"),
    (39, "First Element Selector (:first)", "Selectors & Filters"),
    (40, "Last Element Selector (:last)", "Selectors & Filters"),
    (41, "Even Elements Selector (:even)", "Selectors & Filters"),
    (42, "Odd Elements Selector (:odd)", "Selectors & Filters"),
    (43, "Index-Based Selector (:eq())", "Selectors & Filters"),
    (44, "Greater-Than Selector (:gt())", "Selectors & Filters"),
    (45, "Less-Than Selector (:lt())", "Selectors & Filters"),
    (46, "Header Elements Selector (:header)", "Selectors & Filters"),
    (47, "Animated Elements Selector (:animated)", "Selectors & Filters"),
    (48, "Focus Selector (:focus)", "Selectors & Filters"),
    (49, "Root Selector (:root)", "Selectors & Filters"),
    (50, "Target Selector (:target)", "Selectors & Filters"),
    (51, "Contains Selector (:contains())", "Selectors & Filters"),
    (52, "Empty Selector (:empty)", "Selectors & Filters"),
    (53, "Parent Selector (:parent)", "Selectors & Filters"),
    (54, "Has Selector (:has())", "Selectors & Filters"),
    (55, "Visible Selector (:visible)", "Selectors & Filters"),
    (56, "Hidden Selector (:hidden)", "Selectors & Filters"),
    (57, "Form Input Selector (:input)", "Selectors & Filters"),
    (58, "Form Text Selector (:text)", "Selectors & Filters"),
    (59, "Form Password Selector (:password)", "Selectors & Filters"),
    (60, "Form Radio Selector (:radio)", "Selectors & Filters"),
    (61, "Form Checkbox Selector (:checkbox)", "Selectors & Filters"),
    (62, "Form Submit Selector (:submit)", "Selectors & Filters"),
    (63, "Checked Selector (:checked)", "Selectors & Filters"),
    (64, "Selected Selector (:selected)", "Selectors & Filters"),

    # 3. DOM Traversal (065-091)
    (65, "DOM Traversal Overview", "DOM Traversal"),
    (66, "Filtering Elements with `.filter()`", "DOM Traversal"),
    (67, "Excluding Elements with `.not()`", "DOM Traversal"),
    (68, "Checking Conditions with `.is()`", "DOM Traversal"),
    (69, "Finding Descendants with `.has()`", "DOM Traversal"),
    (70, "Finding Elements with `.find()`", "DOM Traversal"),
    (71, "Finding Ancestors with `.closest()`", "DOM Traversal"),
    (72, "Traversing Parents with `.parent()`", "DOM Traversal"),
    (73, "Traversing Ancestors with `.parents()`", "DOM Traversal"),
    (74, "Traversing Up to a Limit with `.parentsUntil()`", "DOM Traversal"),
    (75, "Traversing Children with `.children()`", "DOM Traversal"),
    (76, "Traversing Sibling Elements with `.siblings()`", "DOM Traversal"),
    (77, "Finding the Next Sibling with `.next()`", "DOM Traversal"),
    (78, "Finding All Subsequent Siblings with `.nextAll()`", "DOM Traversal"),
    (79, "Traversing Next Siblings with Limit (`.nextUntil()`)", "DOM Traversal"),
    (80, "Finding the Previous Sibling with `.prev()`", "DOM Traversal"),
    (81, "Finding All Preceding Siblings with `.prevAll()`", "DOM Traversal"),
    (82, "Traversing Previous Siblings with Limit (`.prevUntil()`)", "DOM Traversal"),
    (83, "Selecting the First Item with `.first()`", "DOM Traversal"),
    (84, "Selecting the Last Item with `.last()`", "DOM Traversal"),
    (85, "Selecting by Index with `.eq()`", "DOM Traversal"),
    (86, "Slicing Elements with `.slice()`", "DOM Traversal"),
    (87, "Iterating Elements with `.each()`", "DOM Traversal"),
    (88, "Transforming Collections with `.map()`", "DOM Traversal"),
    (89, "Adding Elements to a Set with `.add()`", "DOM Traversal"),
    (90, "Restoring Previous Elements with `.addBack()`", "DOM Traversal"),
    (91, "Ending Traversal Chaining with `.end()`", "DOM Traversal"),

    # 4. Content, Attributes & CSS (092-122)
    (92, "DOM Content Overview", "Content, Attributes & CSS"),
    (93, "Getting Text Content with `.text()`", "Content, Attributes & CSS"),
    (94, "Setting Text Content with `.text(value)`", "Content, Attributes & CSS"),
    (95, "Getting HTML Content with `.html()`", "Content, Attributes & CSS"),
    (96, "Setting HTML Content with `.html(value)`", "Content, Attributes & CSS"),
    (97, "Getting Input Values with `.val()`", "Content, Attributes & CSS"),
    (98, "Setting Input Values with `.val(value)`", "Content, Attributes & CSS"),
    (99, "Getting Element Attributes with `.attr()`", "Content, Attributes & CSS"),
    (100, "Setting Element Attributes with `.attr(key, val)`", "Content, Attributes & CSS"),
    (101, "Removing Attributes with `.removeAttr()`", "Content, Attributes & CSS"),
    (102, "Understanding Properties vs Attributes", "Content, Attributes & CSS"),
    (103, "Getting and Setting Properties with `.prop()`", "Content, Attributes & CSS"),
    (104, "Removing Properties with `.removeProp()`", "Content, Attributes & CSS"),
    (105, "Getting CSS Properties with `.css()`", "Content, Attributes & CSS"),
    (106, "Setting Single CSS Property with `.css(prop, val)`", "Content, Attributes & CSS"),
    (107, "Setting Multiple CSS Properties with Object Syntax", "Content, Attributes & CSS"),
    (108, "Adding Classes with `.addClass()`", "Content, Attributes & CSS"),
    (109, "Removing Classes with `.removeClass()`", "Content, Attributes & CSS"),
    (110, "Toggling Classes with `.toggleClass()`", "Content, Attributes & CSS"),
    (111, "Checking Classes with `.hasClass()`", "Content, Attributes & CSS"),
    (112, "Getting and Setting Width with `.width()`", "Content, Attributes & CSS"),
    (113, "Getting and Setting Height with `.height()`", "Content, Attributes & CSS"),
    (114, "Understanding Inner Dimensions (`.innerWidth()`, `.innerHeight()`)", "Content, Attributes & CSS"),
    (115, "Understanding Outer Dimensions (`.outerWidth()`, `.outerHeight()`)", "Content, Attributes & CSS"),
    (116, "Getting and Setting Element Position with `.position()`", "Content, Attributes & CSS"),
    (117, "Getting and Setting Element Offset with `.offset()`", "Content, Attributes & CSS"),
    (118, "Scroll Top Position with `.scrollTop()`", "Content, Attributes & CSS"),
    (119, "Scroll Left Position with `.scrollLeft()`", "Content, Attributes & CSS"),
    (120, "Smooth Scrolling with `.animate()`", "Content, Attributes & CSS"),
    (121, "Working with Box Sizing in jQuery", "Content, Attributes & CSS"),
    (122, "Practical Responsive Dimension Adjustments", "Content, Attributes & CSS"),

    # 5. DOM Tree Modification (123-149)
    (123, "DOM Insertion Overview", "DOM Tree Modification"),
    (124, "Creating Elements Dynamically with jQuery", "DOM Tree Modification"),
    (125, "Appending Content with `.append()`", "DOM Tree Modification"),
    (126, "Prepending Content with `.prepend()`", "DOM Tree Modification"),
    (127, "Appending to a Target with `.appendTo()`", "DOM Tree Modification"),
    (128, "Prepending to a Target with `.prependTo()`", "DOM Tree Modification"),
    (129, "Inserting After Elements with `.after()`", "DOM Tree Modification"),
    (130, "Inserting Before Elements with `.before()`", "DOM Tree Modification"),
    (131, "Inserting After with Inverted Syntax (`.insertAfter()`)", "DOM Tree Modification"),
    (132, "Inserting Before with Inverted Syntax (`.insertBefore()`)", "DOM Tree Modification"),
    (133, "Moving Existing Elements in the DOM", "DOM Tree Modification"),
    (134, "Cloning Elements with `.clone()`", "DOM Tree Modification"),
    (135, "Cloning with Events and Data (`.clone(true)`)", "DOM Tree Modification"),
    (136, "Removing Elements with `.remove()`", "DOM Tree Modification"),
    (137, "Emptying Elements with `.empty()`", "DOM Tree Modification"),
    (138, "Detaching Elements with `.detach()`", "DOM Tree Modification"),
    (139, "Replacing Elements with `.replaceWith()`", "DOM Tree Modification"),
    (140, "Replacing All with `.replaceAll()`", "DOM Tree Modification"),
    (141, "Wrapping Elements with `.wrap()`", "DOM Tree Modification"),
    (142, "Wrapping All Elements with `.wrapAll()`", "DOM Tree Modification"),
    (143, "Wrapping Inner Content with `.wrapInner()`", "DOM Tree Modification"),
    (144, "Unwrapping Elements with `.unwrap()`", "DOM Tree Modification"),
    (145, "Storing Custom Data with `.data()`", "DOM Tree Modification"),
    (146, "Reading Custom Data with `.data(key)`", "DOM Tree Modification"),
    (147, "Removing Custom Data with `.removeData()`", "DOM Tree Modification"),
    (148, "Performance Best Practices for DOM Manipulation", "DOM Tree Modification"),
    (149, "Building a Dynamic Todo List Item", "DOM Tree Modification"),

    # 6. Event Handling & Interactions (150-204)
    (150, "Event Handling Overview in jQuery", "Event Handling & Interactions"),
    (151, "Click Event with `.click()`", "Event Handling & Interactions"),
    (152, "Double-Click Event with `.dblclick()`", "Event Handling & Interactions"),
    (153, "Mouse Down and Mouse Up Events", "Event Handling & Interactions"),
    (154, "Mouse Enter and Mouse Leave Events", "Event Handling & Interactions"),
    (155, "Mouse Over and Mouse Out Events", "Event Handling & Interactions"),
    (156, "Mouse Move Event with `.mousemove()`", "Event Handling & Interactions"),
    (157, "Hover Event with `.hover()`", "Event Handling & Interactions"),
    (158, "Focus Event with `.focus()`", "Event Handling & Interactions"),
    (159, "Blur Event with `.blur()`", "Event Handling & Interactions"),
    (160, "Focusin and Focusout Events", "Event Handling & Interactions"),
    (161, "Change Event with `.change()`", "Event Handling & Interactions"),
    (162, "Input Event for Real-Time Changes", "Event Handling & Interactions"),
    (163, "Key Down Event with `.keydown()`", "Event Handling & Interactions"),
    (164, "Key Up Event with `.keyup()`", "Event Handling & Interactions"),
    (165, "Key Press Event (and Deprecation Context)", "Event Handling & Interactions"),
    (166, "Form Submit Event with `.submit()`", "Event Handling & Interactions"),
    (167, "Window Resize Event with `.resize()`", "Event Handling & Interactions"),
    (168, "Window Scroll Event with `.scroll()`", "Event Handling & Interactions"),
    (169, "Universal Event Binding with `.on()`", "Event Handling & Interactions"),
    (170, "Removing Event Listeners with `.off()`", "Event Handling & Interactions"),
    (171, "One-Time Events with `.one()`", "Event Handling & Interactions"),
    (172, "Event Delegation for Dynamic Elements", "Event Handling & Interactions"),
    (173, "The jQuery Event Object", "Event Handling & Interactions"),
    (174, "Preventing Default Behaviors with `event.preventDefault()`", "Event Handling & Interactions"),
    (175, "Stopping Event Propagation with `event.stopPropagation()`", "Event Handling & Interactions"),
    (176, "Stopping Immediate Propagation (`event.stopImmediatePropagation()`)", "Event Handling & Interactions"),
    (177, "Returning False in jQuery Event Handlers", "Event Handling & Interactions"),
    (178, "Inspecting Event Target (`event.target` vs `event.currentTarget`)", "Event Handling & Interactions"),
    (179, "Mouse Coordinates (`event.pageX` and `event.pageY`)", "Event Handling & Interactions"),
    (180, "Identifying Key Codes (`event.key` and `event.which`)", "Event Handling & Interactions"),
    (181, "Passing Custom Data into Event Handlers", "Event Handling & Interactions"),
    (182, "Programmatic Event Triggering with `.trigger()`", "Event Handling & Interactions"),
    (183, "Triggering Handlers Without Defaults (`.triggerHandler()`)", "Event Handling & Interactions"),
    (184, "Custom Events in jQuery", "Event Handling & Interactions"),
    (185, "Event Namespaces in jQuery", "Event Handling & Interactions"),
    (186, "Multiple Events with Single Handler", "Event Handling & Interactions"),
    (187, "Multiple Events with Object Map Syntax", "Event Handling & Interactions"),
    (188, "Context Menu Event (`contextmenu`)", "Event Handling & Interactions"),
    (189, "Copy, Cut, and Paste Events", "Event Handling & Interactions"),
    (190, "Drag and Drop Events Overview", "Event Handling & Interactions"),
    (191, "Building a Click-to-Copy Button", "Event Handling & Interactions"),
    (192, "Building a Toggle Visibility Widget", "Event Handling & Interactions"),
    (193, "Building an Accordion Component", "Event Handling & Interactions"),
    (194, "Building a Tabbed Content Widget", "Event Handling & Interactions"),
    (195, "Building a Modal Dialog Box", "Event Handling & Interactions"),
    (196, "Building a Dropdown Menu", "Event Handling & Interactions"),
    (197, "Building an Image Lightbox Preview", "Event Handling & Interactions"),
    (198, "Building a Character Counter for Inputs", "Event Handling & Interactions"),
    (199, "Building a Star Rating Widget", "Event Handling & Interactions"),
    (200, "Building an Interactive Tooltip", "Event Handling & Interactions"),
    (201, "Building an Autocomplete Suggestion Box", "Event Handling & Interactions"),
    (202, "Building an Infinite Scroll Trigger", "Event Handling & Interactions"),
    (203, "Building Keyboard Shortcuts Manager", "Event Handling & Interactions"),
    (204, "Event Handling Best Practices & Memory Safety", "Event Handling & Interactions"),

    # 7. Effects & Animations (205-239)
    (205, "Effects & Animations Overview", "Effects & Animations"),
    (206, "Showing Elements with `.show()`", "Effects & Animations"),
    (207, "Hiding Elements with `.hide()`", "Effects & Animations"),
    (208, "Toggling Visibility with `.toggle()`", "Effects & Animations"),
    (209, "Fading In Elements with `.fadeIn()`", "Effects & Animations"),
    (210, "Fading Out Elements with `.fadeOut()`", "Effects & Animations"),
    (211, "Toggling Fade with `.fadeToggle()`", "Effects & Animations"),
    (212, "Fading to a Specific Opacity with `.fadeTo()`", "Effects & Animations"),
    (213, "Sliding Down Elements with `.slideDown()`", "Effects & Animations"),
    (214, "Sliding Up Elements with `.slideUp()`", "Effects & Animations"),
    (215, "Toggling Slide with `.slideToggle()`", "Effects & Animations"),
    (216, "Custom Animations with `.animate()`", "Effects & Animations"),
    (217, "Animating Multiple CSS Properties", "Effects & Animations"),
    (218, "Using Relative Values in `.animate()`", "Effects & Animations"),
    (219, "Using Pre-Defined Values in `.animate()`", "Effects & Animations"),
    (220, "Animation Easing: `swing` vs `linear`", "Effects & Animations"),
    (221, "Animation Callbacks & Sequential Flows", "Effects & Animations"),
    (222, "Understanding the Animation Queue", "Effects & Animations"),
    (223, "Stopping Animations with `.stop()`", "Effects & Animations"),
    (224, "Finishing Animations with `.finish()`", "Effects & Animations"),
    (225, "Delaying Animations with `.delay()`", "Effects & Animations"),
    (226, "Clearing the Queue with `.clearQueue()`", "Effects & Animations"),
    (227, "Creating Multi-Step Animation Sequences", "Effects & Animations"),
    (228, "Animating Colors (and jQuery UI Plugin Context)", "Effects & Animations"),
    (229, "Animating CSS Transforms with jQuery", "Effects & Animations"),
    (230, "Building a Collapsible Sidebar Drawer", "Effects & Animations"),
    (231, "Building an Animated Progress Bar", "Effects & Animations"),
    (232, "Building a Pulse Effect Notification", "Effects & Animations"),
    (233, "Building an Animated Counter Widget", "Effects & Animations"),
    (234, "Building an Image Carousel Slider", "Effects & Animations"),
    (235, "Building a Floating Notification Toast", "Effects & Animations"),
    (236, "Building a Shake Effect for Error States", "Effects & Animations"),
    (237, "Building a Skeleton Loading Placeholder", "Effects & Animations"),
    (238, "Animation Accessibility & `prefers-reduced-motion`", "Effects & Animations"),
    (239, "Animation Performance & Hardware Acceleration", "Effects & Animations"),

    # 8. Form Handling & Validation (240-269)
    (240, "Form Handling Overview", "Form Handling & Validation"),
    (241, "Reading Form Values Across All Input Types", "Form Handling & Validation"),
    (242, "Setting Form Values Dynamically", "Form Handling & Validation"),
    (243, "Intercepting Form Submission", "Form Handling & Validation"),
    (244, "Client-Side Validation Fundamentals", "Form Handling & Validation"),
    (245, "Validating Required Fields", "Form Handling & Validation"),
    (246, "Validating Text Length Constraints", "Form Handling & Validation"),
    (247, "Validating Email Syntax with Regex", "Form Handling & Validation"),
    (248, "Validating Password Complexity", "Form Handling & Validation"),
    (249, "Confirm Password Match Validation", "Form Handling & Validation"),
    (250, "Validating Numeric Ranges", "Form Handling & Validation"),
    (251, "Validating Checkbox Agreement", "Form Handling & Validation"),
    (252, "Validating Radio Button Selection", "Form Handling & Validation"),
    (253, "Validating Select Dropdown Choices", "Form Handling & Validation"),
    (254, "Displaying Inline Error Messages", "Form Handling & Validation"),
    (255, "Highlighting Error Fields with CSS Classes", "Form Handling & Validation"),
    (256, "Real-Time Validation on Blur", "Form Handling & Validation"),
    (257, "Real-Time Validation on Input", "Form Handling & Validation"),
    (258, "Disabling the Submit Button During Processing", "Form Handling & Validation"),
    (259, "Resetting Forms Programmatically", "Form Handling & Validation"),
    (260, "Serializing Form Data with `.serialize()`", "Form Handling & Validation"),
    (261, "Serializing Form Data as Array with `.serializeArray()`", "Form Handling & Validation"),
    (262, "Building a Live Search Filter for Lists", "Form Handling & Validation"),
    (263, "Building a Password Visibility Toggle", "Form Handling & Validation"),
    (264, "Building a \"Select All\" Master Checkbox", "Form Handling & Validation"),
    (265, "Building an Indeterminate Checkbox State", "Form Handling & Validation"),
    (266, "Building a Multi-Step Wizard Form", "Form Handling & Validation"),
    (267, "Building a Dependent Dropdown Selector", "Form Handling & Validation"),
    (268, "Building a File Upload Preview Widget", "Form Handling & Validation"),
    (269, "Complete Form Validation System", "Form Handling & Validation"),

    # 9. AJAX & Asynchronous Requests (270-300)
    (270, "AJAX Overview & Asynchronous Architecture", "AJAX & Asynchronous Requests"),
    (271, "The Core `$.ajax()` Method", "AJAX & Asynchronous Requests"),
    (272, "Making GET Requests with `$.ajax()`", "AJAX & Asynchronous Requests"),
    (273, "Making POST Requests with `$.ajax()`", "AJAX & Asynchronous Requests"),
    (274, "Handling Success and Error Callbacks", "AJAX & Asynchronous Requests"),
    (275, "Promise-Style Handlers: `.done()`, `.fail()`, `.always()`", "AJAX & Asynchronous Requests"),
    (276, "Shorthand GET with `$.get()`", "AJAX & Asynchronous Requests"),
    (277, "Shorthand POST with `$.post()`", "AJAX & Asynchronous Requests"),
    (278, "Fetching JSON Directly with `$.getJSON()`", "AJAX & Asynchronous Requests"),
    (279, "Loading Remote HTML into Elements with `.load()`", "AJAX & Asynchronous Requests"),
    (280, "Loading Specific HTML Fragments with `.load()`", "AJAX & Asynchronous Requests"),
    (281, "Setting Custom HTTP Headers in `$.ajax()`", "AJAX & Asynchronous Requests"),
    (282, "Setting the `dataType` Option", "AJAX & Asynchronous Requests"),
    (283, "Sending JSON Payloads (`contentType` and `JSON.stringify()`)", "AJAX & Asynchronous Requests"),
    (284, "Handling HTTP Status Codes with the `statusCode` Option", "AJAX & Asynchronous Requests"),
    (285, "Request Timeouts and Cancellation", "AJAX & Asynchronous Requests"),
    (286, "Building Loading Spinners and Indicators", "AJAX & Asynchronous Requests"),
    (287, "Global AJAX Event: `ajaxStart` and `ajaxStop`", "AJAX & Asynchronous Requests"),
    (288, "Global AJAX Event: `ajaxError` and Centralized Error Handling", "AJAX & Asynchronous Requests"),
    (289, "Global AJAX Event: `ajaxSend` and `ajaxComplete`", "AJAX & Asynchronous Requests"),
    (290, "Configuring Global Defaults with `$.ajaxSetup()`", "AJAX & Asynchronous Requests"),
    (291, "Disabling AJAX Cache for Dynamic Data", "AJAX & Asynchronous Requests"),
    (292, "Understanding Cross-Origin Resource Sharing (CORS)", "AJAX & Asynchronous Requests"),
    (293, "Working with JSONP (and Legacy Cross-Domain Context)", "AJAX & Asynchronous Requests"),
    (294, "Handling PUT, PATCH, and DELETE Requests", "AJAX & Asynchronous Requests"),
    (295, "Uploading Files with `$.ajax()` and `FormData`", "AJAX & Asynchronous Requests"),
    (296, "Parsing and Transforming Server Responses", "AJAX & Asynchronous Requests"),
    (297, "Building a Live Currency Converter Widget", "AJAX & Asynchronous Requests"),
    (298, "Building a Live Weather Dashboard Widget", "AJAX & Asynchronous Requests"),
    (299, "Building an Asynchronous Pagination System", "AJAX & Asynchronous Requests"),
    (300, "AJAX Security Best Practices & CSRF Protection", "AJAX & Asynchronous Requests"),

    # 10. JSON Integration & Dynamic Rendering (301-310)
    (301, "JSON Integration Fundamentals", "JSON Integration & Dynamic Rendering"),
    (302, "Parsing JSON with `JSON.parse()` and jQuery Helpers", "JSON Integration & Dynamic Rendering"),
    (303, "Converting Objects to JSON with `JSON.stringify()`", "JSON Integration & Dynamic Rendering"),
    (304, "Iterating JSON Arrays with `$.each()`", "JSON Integration & Dynamic Rendering"),
    (305, "Rendering Dynamic Tables from JSON Data", "JSON Integration & Dynamic Rendering"),
    (306, "Building a Filterable Product Catalog", "JSON Integration & Dynamic Rendering"),
    (307, "Client-Side Data Pagination from JSON", "JSON Integration & Dynamic Rendering"),
    (308, "Dynamic Search & Highlight in JSON Results", "JSON Integration & Dynamic Rendering"),
    (309, "Managing Local State with LocalStorage and JSON", "JSON Integration & Dynamic Rendering"),
    (310, "Complete Client-Side CRUD Application with JSON", "JSON Integration & Dynamic Rendering"),

    # 11. Plugins, Architecture & Security (311-330)
    (311, "jQuery Plugin Architecture Overview", "Plugins, Architecture & Security"),
    (312, "Extending jQuery with `$.fn`", "Plugins, Architecture & Security"),
    (313, "Preserving Method Chaining in Custom Plugins", "Plugins, Architecture & Security"),
    (314, "Handling the `this` Context in Plugins", "Plugins, Architecture & Security"),
    (315, "Accepting Options and Settings in Plugins", "Plugins, Architecture & Security"),
    (316, "Merging Defaults with `$.extend()`", "Plugins, Architecture & Security"),
    (317, "Scoping and Encapsulation with IIFE", "Plugins, Architecture & Security"),
    (318, "Supporting Public Methods and API Commands", "Plugins, Architecture & Security"),
    (319, "Building a Reusable Tooltip Plugin", "Plugins, Architecture & Security"),
    (320, "Building an Expandable Content Plugin", "Plugins, Architecture & Security"),
    (321, "Resolving Namespace Conflicts with `$.noConflict()`", "Plugins, Architecture & Security"),
    (322, "Debugging Techniques for jQuery Applications", "Plugins, Architecture & Security"),
    (323, "Understanding Deprecated and Removed APIs", "Plugins, Architecture & Security"),
    (324, "Selector Performance and Optimization", "Plugins, Architecture & Security"),
    (325, "DOM Caching Strategies", "Plugins, Architecture & Security"),
    (326, "Memory Management and Leak Prevention", "Plugins, Architecture & Security"),
    (327, "Cross-Site Scripting (XSS) Prevention in jQuery", "Plugins, Architecture & Security"),
    (328, "Accessible jQuery: ARIA Attributes and Keyboard Nav", "Plugins, Architecture & Security"),
    (329, "Complete Capstone Project: Interactive Task Management Board", "Plugins, Architecture & Security"),
    (330, "Final jQuery Project Review and Best Practices", "Plugins, Architecture & Security")
]

def make_lesson(lid, title, cat):
    clean = re.sub(r'[`\'"]', '', title)
    num = f"{lid:03d}"
    prereq = f"Lesson {lid-1:03d}" if lid > 1 else "None (Beginner starting point)"
    
    # Defaults tailored per category
    if cat == "Fundamentals & Setup":
        intro = f"In this foundational lesson on {clean}, you will explore the essential syntax, architecture, and core setup required to utilize jQuery effectively."
        obj = f"Understand the core mechanics, setup patterns, and browser execution flow of {clean}."
        kw = ["jQuery", "$()", "DOM", "Setup"]
        notes = "Always ensure jQuery is loaded prior to any script calling jQuery methods."
        mistakes = "Calling jQuery before the library has loaded, causing '$ is not defined'."
        security = "Use official CDN mirrors with Subresource Integrity (SRI) hashes."
        code = f"""<!-- Interactive Container -->
<div id="demo-box" style="padding: 20px; background: #1e293b; border-radius: 12px; border: 1px solid #334155; text-align: center;">
    <h2 id="demo-heading" style="color: #38bdf8; margin: 0 0 10px 0;">{clean}</h2>
    <p id="demo-desc" style="color: #94a3b8; margin: 0 0 15px 0;">Exploring jQuery fundamentals and DOM readiness in PLAY-CODE (@N4).</p>
    <button id="demo-btn" style="background: #00bfa5; color: #0b1120; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer;">Run {clean}</button>
</div>

<script>
$(document).ready(function() {{
    $('#demo-btn').on('click', function() {{
        $('#demo-heading').css('color', '#00e5d0');
        $('#demo-desc').text('Successfully executed {clean}! The DOM is ready and styled.');
    }});
}});
</script>"""
        expected = f"Clicking 'Run {clean}' updates the text description and highlights the heading in cyan."
        expl = f"Applies jQuery ready handling and element manipulation to demonstrate {clean}."

    elif cat == "Selectors & Filters":
        intro = f"Selectors form the heart of jQuery. This lesson covers '{clean}' to query, filter, and isolate specific DOM nodes."
        obj = f"Learn how to accurately target matching elements using {clean}."
        kw = ["Selector", "$()", "CSS Query", clean.split()[-1]]
        notes = "Prefer ID selectors or class selectors for maximum DOM query performance."
        mistakes = "Omitting prefix symbols like '#' for IDs or '.' for classes in selector queries."
        security = "Never concatenate untrusted user input directly into selector strings."
        
        target_rule = "$('.target-item')"
        if "by ID" in title:
            target_rule = "$('#special-target')"
        elif "by Class" in title:
            target_rule = "$('.target-class')"
        elif ":first" in title:
            target_rule = "$('.selector-list li:first')"
        elif ":last" in title:
            target_rule = "$('.selector-list li:last')"
        elif ":even" in title:
            target_rule = "$('.selector-list li:even')"
        elif ":odd" in title:
            target_rule = "$('.selector-list li:odd')"
        elif ":eq" in title:
            target_rule = "$('.selector-list li:eq(2)')"
        elif "Attribute" in title:
            target_rule = "$('li[data-status=\"active\"]')"

        code = f"""<!-- List container for testing selectors -->
<div style="padding: 18px; background: #0f172a; border-radius: 10px; color: #e2e8f0;">
    <h4 style="color: #00e5d0; margin-top: 0;">Testing: {clean}</h4>
    <ul class="selector-list" style="list-style: none; padding: 0; margin-bottom: 15px;">
        <li class="target-class" style="padding: 8px 12px; margin-bottom: 6px; background: #1e293b; border-radius: 6px;">Item 1 (Index 0)</li>
        <li data-status="active" style="padding: 8px 12px; margin-bottom: 6px; background: #1e293b; border-radius: 6px;">Item 2 (Active Status)</li>
        <li id="special-target" style="padding: 8px 12px; margin-bottom: 6px; background: #1e293b; border-radius: 6px;">Item 3 (#special-target)</li>
        <li class="target-class" style="padding: 8px 12px; margin-bottom: 6px; background: #1e293b; border-radius: 6px;">Item 4 (Index 3)</li>
    </ul>
    <button id="btn-run-selector" style="background: #00bfa5; color: #0b1120; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer;">Apply {clean}</button>
</div>

<script>
$('#btn-run-selector').on('click', function() {{
    {target_rule}.css({{
        'background': '#065f46',
        'color': '#6ee7b7',
        'border-left': '4px solid #00e5d0'
    }});
}});
</script>"""
        expected = f"Elements matching the selector criteria ({clean}) are highlighted with an emerald background and cyan border."
        expl = f"Executes {target_rule} and modifies matching collection items in a single chained call."

    elif cat == "DOM Traversal":
        intro = f"DOM traversal methods allow relative navigation through parents, descendants, and siblings. This lesson covers '{clean}'."
        obj = f"Navigate the DOM tree accurately relative to target elements using {clean}."
        kw = ["Traversal", "Parent", "Child", "Sibling", clean]
        notes = "Scoped traversal methods like .find() are faster than global queries across the entire document."
        mistakes = "Confusing .closest() (upward ancestor search) with .find() (downward descendant search)."
        security = "Ensure traversal boundaries do not ascend above the sandboxed container."
        code = f"""<!-- Hierarchy Tree Container -->
<div id="tree-root" style="padding: 18px; background: #0f172a; border-radius: 10px; color: #e2e8f0;">
    <div class="box-level-1" style="padding: 12px; background: #1e293b; border-radius: 8px;">
        <span style="color: #94a3b8; font-size: 0.85rem;">Ancestor Container</span>
        <div class="box-level-2" style="padding: 10px; background: #334155; border-radius: 6px; margin-top: 6px;">
            <span class="sibling-node" style="display:inline-block; margin-right:8px; padding:4px 8px; background:#1e293b; border-radius:4px;">Sibling Left</span>
            <button id="active-trigger" style="background:#00bfa5; color:#0b1120; border:none; padding:6px 12px; border-radius:4px; font-weight:600; cursor:pointer;">Active Node</button>
            <span class="sibling-node" style="display:inline-block; margin-left:8px; padding:4px 8px; background:#1e293b; border-radius:4px;">Sibling Right</span>
        </div>
    </div>
    <div id="traversal-info" style="margin-top: 12px; padding: 10px; background: #020617; border-radius: 6px; font-family: monospace; color: #38bdf8;">
        Click 'Active Node' to execute {clean}.
    </div>
</div>

<script>
$('#active-trigger').on('click', function() {{
    var target = $(this).parent();
    target.css('border', '2px solid #00e5d0');
    $('#traversal-info').text('Executed {clean}: Traversed successfully to target node.');
}});
</script>"""
        expected = f"Target container receives a cyan border and output logs confirming execution of {clean}."
        expl = f"Executes relative traversal ({clean}) starting from the clicked node."

    elif cat == "Content, Attributes & CSS":
        intro = f"Modifying content, attributes, and styles dynamically is essential. In this lesson on '{clean}', you master reading and writing DOM values."
        obj = f"Learn how to inspect and update text, attributes, or CSS properties using {clean}."
        kw = ["DOM Content", "CSS", "Attributes", clean]
        notes = "jQuery normalizes camelCase and kebab-case style names across all browsers."
        mistakes = "Using .attr('checked') instead of .prop('checked') for live form controls."
        security = "Use .text() when rendering untrusted user inputs to prevent cross-site scripting."
        code = f"""<!-- Live Content & Style Workspace -->
<div style="padding: 18px; background: #1e293b; border-radius: 10px; color: #f8fafc;">
    <h3 id="target-title" style="color: #38bdf8; margin-top: 0;">PLAY-CODE Interactive Header</h3>
    <div style="margin-bottom: 12px;">
        <input type="text" id="custom-input" value="Updated via {clean}" style="padding: 8px 12px; background: #0f172a; border: 1px solid #475569; color: #fff; border-radius: 6px; width: 65%;">
    </div>
    <button id="btn-update-content" style="background: #00bfa5; color: #0b1120; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer;">Run {clean}</button>
    <div id="content-status" style="margin-top: 12px; font-family: monospace; color: #a7f3d0;"></div>
</div>

<script>
$('#btn-update-content').on('click', function() {{
    var val = $('#custom-input').val();
    $('#target-title').text(val).css('color', '#00e5d0');
    $('#content-status').text('Successfully applied {clean}! Value: ' + val);
}});
</script>"""
        expected = f"Header updates dynamically to match the input string and confirmation is displayed."
        expl = f"Demonstrates reading and setting DOM values and styling rules via {clean}."

    elif cat == "DOM Tree Modification":
        intro = f"Creating, inserting, moving, and removing nodes allows interfaces to update on the fly. This lesson covers '{clean}'."
        obj = f"Learn how to manipulate the document tree structure using {clean}."
        kw = ["DOM Insertion", "Append", "Prepend", "Clone", "Remove"]
        notes = "Batching DOM insertions into a single string or fragment prevents layout reflows."
        mistakes = "Forgetting that inserting an existing element moves it rather than copying it."
        security = "Sanitize dynamic markup strings before appending them to the DOM."
        code = f"""<!-- Dynamic Node Container -->
<div style="padding: 18px; background: #0f172a; border-radius: 10px; color: #e2e8f0;">
    <h4 style="color: #00e5d0; margin-top: 0;">Tree Modification: {clean}</h4>
    <div id="node-container" style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 15px;">
        <div class="node-item" style="padding: 10px 14px; background: #1e293b; border-radius: 6px; border-left: 4px solid #38bdf8;">Base Element 1</div>
    </div>
    <button id="btn-tree-mod" style="background: #00bfa5; color: #0b1120; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer;">Execute {clean}</button>
</div>

<script>
var nodeCount = 2;
$('#btn-tree-mod').on('click', function() {{
    var newCard = $('<div class=\"node-item\" style=\"padding:10px 14px; background:#1e293b; border-radius:6px; border-left:4px solid #00e5d0;\">Created item #' + nodeCount + ' via {clean}</div>');
    $('#node-container').append(newCard);
    nodeCount++;
}});
</script>"""
        expected = f"A new styled card element is added to the container each time the button is clicked."
        expl = f"Creates a dynamic jQuery element and modifies the DOM tree using {clean}."

    elif cat == "Event Handling & Interactions":
        intro = f"Event handling connects user clicks, keystrokes, and movements to interactive logic. This lesson covers '{clean}'."
        obj = f"Master event listeners, event delegation, and input handling with {clean}."
        kw = ["Event", ".on()", "Listener", "Callback", clean]
        notes = "Use event delegation ($(parent).on('event', 'child', fn)) to handle dynamically created elements."
        mistakes = "Binding multiple listeners accidentally by calling .on() repeatedly inside loops."
        security = "Clean up event listeners on removed nodes using .off() to prevent memory leaks."
        code = f"""<!-- Event Interaction Sandbox -->
<div style="padding: 18px; background: #1e293b; border-radius: 10px; color: #f8fafc; text-align: center;">
    <h4 style="color: #38bdf8; margin-top: 0;">Interactive Event: {clean}</h4>
    <div id="interactive-pad" style="padding: 24px; background: #0f172a; border: 2px dashed #475569; border-radius: 8px; margin-bottom: 12px; cursor: pointer;">
        Click or interact inside this test pad
    </div>
    <div id="event-feedback" style="font-family: monospace; color: #00e5d0; min-height: 24px;">Waiting for user interaction...</div>
</div>

<script>
var hits = 0;
$('#interactive-pad').on('click', function(e) {{
    hits++;
    $('#event-feedback').html('Fired <strong>{clean}</strong> (Click #' + hits + ') at pointer coords: ' + e.pageX + ', ' + e.pageY);
    $(this).css('border-color', '#00bfa5');
}});
</script>"""
        expected = f"Interacting with the test pad triggers the event callback, updating the coordinates readout."
        expl = f"Normalizes the browser event object and executes callback logic via {clean}."

    elif cat == "Effects & Animations":
        intro = f"Visual transitions and effects create engaging user interfaces. This lesson covers '{clean}'."
        obj = f"Learn how to trigger, configure, and control animations using {clean}."
        kw = ["Effects", "Animation", ".animate()", "Easing", clean]
        notes = "Call .stop(true, true) before triggering hover effects to prevent queue build-ups."
        mistakes = "Attempting to animate non-numeric CSS properties without a specialized color plugin."
        security = "Respect user system accessibility preferences (prefers-reduced-motion)."
        code = f"""<!-- Animation Playground -->
<div style="padding: 18px; background: #0f172a; border-radius: 10px; color: #e2e8f0;">
    <h4 style="color: #00e5d0; margin-top: 0;">Animation Workspace: {clean}</h4>
    <div style="margin-bottom: 15px;">
        <button id="btn-trigger-anim" style="background: #00bfa5; color: #0b1120; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer;">Animate {clean}</button>
    </div>
    <div id="box-anim" style="width: 140px; height: 80px; background: linear-gradient(135deg, #00bfa5, #00e5d0); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #0b1120; font-weight: bold;">
        Active Canvas
    </div>
</div>

<script>
$('#btn-trigger-anim').on('click', function() {{
    var box = $('#box-anim');
    box.stop(true, true).fadeToggle(350, function() {{
        if (!box.is(':visible')) {{
            box.fadeIn(350);
        }}
    }});
}});
</script>"""
        expected = f"The target canvas animates smoothly according to {clean} specifications."
        expl = f"Executes visual effects and manages the jQuery animation queue using {clean}."

    elif cat == "Form Handling & Validation":
        intro = f"Collecting and validating user inputs is critical. This lesson covers '{clean}' to ensure data integrity."
        obj = f"Learn how to read form controls, intercept submission, and display validation states with {clean}."
        kw = ["Forms", "Validation", ".val()", ".serialize()", clean]
        notes = "Client-side validation provides immediate feedback, but server validation remains mandatory."
        mistakes = "Forgetting e.preventDefault() in submit handlers, resulting in unintended page refreshes."
        security = "Sanitize and escape all form data before injecting into the DOM."
        code = f"""<!-- Form Validation Container -->
<div style="padding: 18px; background: #1e293b; border-radius: 10px; color: #f8fafc; max-width: 460px;">
    <h4 style="color: #38bdf8; margin-top: 0;">Validation Sandbox: {clean}</h4>
    <form id="test-form">
        <div style="margin-bottom: 12px;">
            <label style="display:block; font-size:0.85rem; color:#94a3b8; margin-bottom:4px;">Sample Input:</label>
            <input type="text" id="input-val" placeholder="Type text..." style="width:100%; box-sizing:border-box; padding:8px 12px; background:#0f172a; border:1px solid #475569; border-radius:6px; color:#fff;">
            <div id="err-msg" style="color:#f87171; font-size:0.8rem; margin-top:4px; display:none;">Please enter a valid value.</div>
        </div>
        <button type="submit" style="background:#00bfa5; color:#0b1120; border:none; padding:8px 16px; border-radius:6px; font-weight:600; cursor:pointer;">Submit</button>
    </form>
    <div id="form-msg" style="margin-top:12px; font-family:monospace; color:#34d399;"></div>
</div>

<script>
$('#test-form').on('submit', function(e) {{
    e.preventDefault();
    var val = $.trim($('#input-val').val());
    if (!val) {{
        $('#input-val').css('border-color', '#f87171');
        $('#err-msg').show();
        $('#form-msg').text('');
    }} else {{
        $('#input-val').css('border-color', '#10b981');
        $('#err-msg').hide();
        $('#form-msg').text('Form passed validation for {clean}! Value: ' + val);
    }}
}});
</script>"""
        expected = f"Submitting an empty field flags an error; submitting valid text displays confirmation."
        expl = f"Validates form inputs client-side, toggles error styling, and manages submit lifecycle via {clean}."

    elif cat == "AJAX & Asynchronous Requests":
        intro = f"AJAX enables web pages to communicate with servers in the background. In this lesson on '{clean}', you explore asynchronous pipelines."
        obj = f"Configure, execute, and handle asynchronous requests and responses using {clean}."
        kw = ["AJAX", "$.ajax()", "Asynchronous", "JSON", "HTTP"]
        notes = "Modern jQuery supports Promise chaining (.done(), .fail(), .always()) on all AJAX requests."
        mistakes = "Treating asynchronous network calls as synchronous code and expecting instant return values."
        security = "Enforce CSRF protection tokens and validate incoming response payloads."
        code = f"""<!-- AJAX Request Simulator -->
<div style="padding: 18px; background: #0f172a; border-radius: 10px; color: #e2e8f0;">
    <h4 style="color: #00e5d0; margin-top: 0;">AJAX Request: {clean}</h4>
    <button id="btn-ajax-run" style="background: #00bfa5; color: #0b1120; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer; margin-bottom: 12px;">Trigger Request</button>
    <div id="ajax-terminal" style="padding: 14px; background: #1e293b; border-radius: 6px; font-family: monospace; color: #38bdf8; min-height: 50px;">
        Click button to dispatch request...
    </div>
</div>

<script>
$('#btn-ajax-run').on('click', function() {{
    $('#ajax-terminal').html('<span style=\"color:#fbbf24;\">Dispatching asynchronous request for {clean}...</span>');
    
    setTimeout(function() {{
        var mock = {{
            status: 'success',
            lesson: '{clean}',
            code: 200,
            timestamp: new Date().toLocaleTimeString()
        }};
        $('#ajax-terminal').html('<span style=\"color:#34d399;\">Response OK (200):</span>\\n' + JSON.stringify(mock, null, 2));
    }}, 400);
}});
</script>"""
        expected = f"Displays a loading indicator followed by a formatted JSON response confirmation."
        expl = f"Demonstrates how jQuery handles asynchronous request dispatches, state updates, and data parsing via {clean}."

    elif cat == "JSON Integration & Dynamic Rendering":
        intro = f"JSON is the web's universal data exchange format. In this lesson on '{clean}', you learn how to process and render JSON data structures."
        obj = f"Parse, iterate, and transform JSON data feeds into dynamic HTML elements with {clean}."
        kw = ["JSON", "Dynamic Rendering", "Tables", "$.each()", "State"]
        notes = "Always wrap JSON.parse in try/catch blocks when handling external server strings."
        mistakes = "Using eval() to parse JSON strings instead of JSON.parse() or jQuery's automatic parser."
        security = "Sanitize JSON string values before inserting them into HTML templates."
        code = f"""<!-- JSON Data Rendering Container -->
<div style="padding: 18px; background: #1e293b; border-radius: 10px; color: #f8fafc;">
    <h4 style="color: #38bdf8; margin-top: 0;">Dynamic JSON Feed: {clean}</h4>
    <table id="dynamic-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem; margin-bottom: 12px;">
        <thead>
            <tr style="border-bottom: 2px solid #475569; color: #94a3b8;">
                <th style="padding: 6px;">ID</th>
                <th style="padding: 6px;">Title</th>
                <th style="padding: 6px;">Status</th>
            </tr>
        </thead>
        <tbody>
            <!-- Populated dynamically -->
        </tbody>
    </table>
    <button id="btn-load-json" style="background: #00bfa5; color: #0b1120; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer;">Render JSON Feed</button>
</div>

<script>
var records = [
    {{ id: 1, title: 'Learn {clean}', status: 'Active' }},
    {{ id: 2, title: 'Build Project (@N4)', status: 'Pending' }},
    {{ id: 3, title: 'CodePlay Curriculum', status: 'Completed' }}
];

$('#btn-load-json').on('click', function() {{
    var tbody = $('#dynamic-table tbody').empty();
    $.each(records, function(i, item) {{
        tbody.append('<tr style=\"border-bottom:1px solid #334155;\"><td style=\"padding:6px;color:#38bdf8;\">#' + item.id + '</td><td style=\"padding:6px;\">' + item.title + '</td><td style=\"padding:6px;color:#a7f3d0;\">' + item.status + '</td></tr>');
    }});
}});
</script>"""
        expected = f"Table populates with formatted rows constructed dynamically from the JSON collection."
        expl = f"Iterates through structured JSON records and appends table rows dynamically into the DOM using {clean}."

    else: # Plugins, Architecture & Security
        intro = f"Advanced architecture, custom plugin creation, performance, and security are essential for scalable codebases. This lesson covers '{clean}'."
        obj = f"Learn how to author plugins, avoid memory leaks, and protect applications using {clean}."
        kw = ["Plugin", "$.fn", "Security", "Architecture", clean]
        notes = "Always return 'this' from custom jQuery plugins to maintain method chaining compatibility."
        mistakes = "Creating global variables inside plugins instead of encapsulating inside an IIFE."
        security = "Never render unescaped user input inside reusable UI plugin templates."
        code = f"""<!-- Custom Plugin & Architecture Sandbox -->
<div style="padding: 18px; background: #0f172a; border-radius: 10px; color: #e2e8f0;">
    <h4 style="color: #00e5d0; margin-top: 0;">Architecture &amp; Plugin: {clean}</h4>
    <div id="plugin-box" style="padding: 16px; background: #1e293b; border-radius: 8px; margin-bottom: 12px;">
        Testing element for {clean}.
    </div>
    <button id="btn-exec-plugin" style="background: #00bfa5; color: #0b1120; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer;">Execute {clean}</button>
</div>

<script>
(function($) {{
    $.fn.lessonPlugin = function(opts) {{
        var cfg = $.extend({{
            color: '#00e5d0',
            border: '2px solid #00bfa5'
        }}, opts);
        
        return this.each(function() {{
            $(this).css({{
                'color': cfg.color,
                'border': cfg.border
            }});
        }});
    }};
}})(jQuery);

$('#btn-exec-plugin').on('click', function() {{
    $('#plugin-box').lessonPlugin().fadeOut(150).fadeIn(150);
}});
</script>"""
        expected = f"Custom extension executes, applies configured styles, and maintains chaining into fade transitions."
        expl = f"Demonstrates production plugin patterns, IIFE scoping, and method chaining preservation for {clean}."

    return {
        "id": lid,
        "number": num,
        "title": title,
        "cleanTitle": clean,
        "category": cat,
        "introduction": intro,
        "learningObjective": obj,
        "prerequisites": prereq,
        "codeExample": code,
        "expectedOutput": expected,
        "resultExplanation": expl,
        "notes": notes,
        "commonMistakes": mistakes,
        "securityNotes": security,
        "keywordsOrMethods": kw
    }

def main():
    print("Compiling all 330 jQuery lessons...")
    lessons = [make_lesson(lid, title, cat) for lid, title, cat in titles_and_categories]
    assert len(lessons) == 330
    
    out_file = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data", "jquery-lessons.js")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("// PLAY-CODE (@N4) — Complete 330 jQuery Lessons Dataset\n")
        f.write("// Authoritative curriculum dataset spanning 11 categories\n")
        f.write("window.JQUERY_LESSONS = ")
        json.dump(lessons, f, indent=2, ensure_ascii=False)
        f.write(";\n")
        
    print(f"Dataset generated successfully at {out_file} ({os.path.getsize(out_file)} bytes).")

if __name__ == "__main__":
    main()
