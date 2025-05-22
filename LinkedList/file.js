// Delete Node in a Linked List

/*

const deleteNode = function (node) {
  node.val = node.next.val;

  node.next = node.next.next;
};

*/

// Remove Nth Node From End of List

/*

const removeNthFromEnd = function (head, n) {
  let count = 0;

  let current = head;

  while (current !== null) {
    count++;
    current = current.next;
  }

  // edge case when only 1 node
  if (count === n) {
    return head.next;
  }

  
  let prev = head;
  for (let i = 1; i < count - n; i++) {
    prev = prev.next;
  }

  prev.next = prev.next.next;

  return head;
};

*/

// Reverse Linked List

/*

const reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
};

*/

// merge 2 sorted list

/*

const mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(-1); 
  let tail = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  // Add remaining nodes
  tail.next = list1 !== null ? list1 : list2;

  return dummy.next;
};

*/

// palodrime

/*

const isPalindrome = function (head) {
  let arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  return arr.join("") === arr.reverse().join("");
};

*/

// Linked List Cycle

/*

const hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

*/
