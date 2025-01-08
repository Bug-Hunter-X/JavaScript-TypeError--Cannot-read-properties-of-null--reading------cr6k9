# JavaScript Subtle Bug: Null vs. Undefined

This repository demonstrates a common, yet subtle, error in JavaScript related to the handling of `null` and `undefined` values.  The `foo` function intends to return `null` if either input is `null`. However, it fails when an input is `undefined`, throwing a `TypeError`. 

## Bug Description

The primary issue stems from the difference between `null` (intentional absence of value) and `undefined` (variable hasn't been assigned a value).  The strict equality check (`===`) correctly identifies `null`, but `undefined` is not equal to `null`.  This results in an attempt to perform arithmetic on `undefined`, causing the error.

## Solution

The solution provided checks for both `null` and `undefined`, ensuring the function behaves as expected for all possible inputs.