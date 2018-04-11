/// <reference path="fourslash.ts" />

// @module: esnext

// @Filename: /a.ts
// Not included:
////export function abcde() {}
////export function dbf() {}
// Included:
////export function bdf() {}
////export function abcdef() {}
////export function BDF() {}

// @Filename: /b.ts
////bdf/**/

verify.completions({
    at: "",
    includes: [
        {
            name: "bdf",
            source: "/a",
            hasAction: true,
            details: {
                text: "function bdf(): void",
                kind: "function",
                sourceDisplay: "./a",
            },
        },
        {
            name: "abcdef",
            source: "/a",
            hasAction: true,
            details: {
                text: "function abcdef(): void",
                kind: "function",
                sourceDisplay: "./a",
            },
        },
        {
            name: "BDF",
            source: "/a",
            hasAction: true,
            details: {
                text: "function BDF(): void",
                kind: "function",
                sourceDisplay: "./a",
            },
        }
    ],
    excludes: ["abcde", "dbf"],
    preferences: {
        includeCompletionsForModuleExports: true,
    },
})
