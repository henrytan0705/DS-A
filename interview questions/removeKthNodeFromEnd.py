class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def removeKthNodeFromEnd(head, k):
    first = head


second = head

for i in range(k):
	    second = second.next

	if second == None:
		head.value = head.next.value
		head.next = head.next.next
		return

	while second.next is not None:
		first = first.next
		second = second.next

	first.next = first.next.next
	pass
