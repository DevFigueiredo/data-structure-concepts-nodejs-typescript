export class Node {
  public next: Node | null
  constructor (public data: any) {
    this.data = data
    this.next = null
  }
}

export class Stack {
  public firstPosition: Node | null
  public lastPosition: Node | null
  public length: number
  constructor () {
    this.firstPosition = null
    this.lastPosition = null
    this.length = 0
  }

  push (data: any): void {
    const nodeMemory = new Node(data)

    if (this.length === 0) {
      this.firstPosition = nodeMemory
      this.lastPosition = nodeMemory
      this.length = 1
      return
    }

    this.length++
    const firstPositionTemp = this.firstPosition
    nodeMemory.next = firstPositionTemp
    this.firstPosition = nodeMemory
  }

  pop (): void {
    if (this.length === 0) return
    this.length--

    if (this.length === 1) {
      this.firstPosition = null
      this.lastPosition = null
      return
    }

    this.firstPosition = this.firstPosition?.next ?? null
  }

  print (positionData: Node | null): void {
    if (!positionData) return
    console.log(positionData.data)
    positionData = positionData.next

    this.print(positionData)
  }
}

const stack = new Stack()

stack.push('teste1')
stack.push('teste2')
stack.push('teste3')
stack.push('teste4')

stack.print(stack.firstPosition)
console.log(stack)
