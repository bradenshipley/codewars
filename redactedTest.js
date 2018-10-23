/*
https://www.codewars.com/kata/redacted/train/javascript
Your job is to compare two confidential documents that have come into your possession.

The first document has parts redacted, and the other one doesn't.
Return true if the two documents are possibly the same. Return false otherwise.
*/
function redacted(doc1, doc2) {
    if (doc1.length===doc2.length){
    return true;}
    return false;
}