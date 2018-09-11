/**
 * @fileoverview Allow &#39;useless call&#39; when this is null
 * @author Jonathan &#39;J5&#39; Cook
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-useless-call-allow-null"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-useless-call-allow-null", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "(function Foo()).call(this);",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
