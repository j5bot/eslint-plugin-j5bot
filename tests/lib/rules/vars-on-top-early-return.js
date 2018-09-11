/**
 * @fileoverview Allow early return with vars-on-top rule
 * @author Jonathan &#39;J5&#39; Cook
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/vars-on-top-early-return"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("vars-on-top-early-return", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "if (true) { foo = 2; } var foo;",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
