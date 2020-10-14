const options = {
    LOOP_BIND: "loop",
    LOOP_ITEM: "loop-item",
    LOOP_KEY: "loop-key",
    LOOP_INDEX: "loop-index",
    DATA_BIND: "data-bind",
    TEXT_BIND: "text-bind",
    CLASS_BIND: "class-bind",
    IF_BIND: "if",
    REF: "ref",
    PROPS: "props",
    KEY_ATTR: "key",
    EVENTS_ATTR: [
        "on-click",
        "on-mouseover",
        "on-mouseenter",
        "on-mouseup",
        "on-mousedown",
        "on-submit",
        "on-mouseleave",
        "on-keypress",
        "on-keyup",
        "on-keydown",
        "on-load",
        "on-change",
        "on-input",
        "on-mouseout",
        "on-wheel",
        "on-drag",
        "on-dragend",
        "on-dragenter",
        "on-dragleave",
        "on-dragover",
        "on-dragstart",
        "on-canplay",
        "on-focus",
        "on-contextmenu",
        "on-scroll",
        "on-canplaythrough",
        "on-copy",
    ],
    TEXT_BIND_REGEXP: /\{{([^\}\}]+)+\}}/g,
    IF_SCOPE_REGEXP: /(?=\()(?=((?:(?=.*?\((?!.*?\2)(.*\)(?!.*\3).*))(?=.*?\)(?!.*?\3)(.*)).)+?.*?(?=\2)[^(]*(?=\3$)))/g,
    LOOP_BRACE_REGEXP: /\(([^)]+)\)/,
    LOOP_IN_REGEX: /in(?!.*in)/,
    PARAM_DELIMITER: ",",
    EXP_DELIMITER: "~",
    DOUBLEDOT_DELIMITER: ":",
    LOOP_VAR_REGEX: /\B\$\w+/g
};
export default options;
