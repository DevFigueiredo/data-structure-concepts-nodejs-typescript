export class Node {
  public next: Node | null
  constructor (public data: any) {
    this.data = data
    this.next = null
  }
}

export class Queue {
  public firstPosition: Node | null
  public lastPosition: Node | any
  public length: number
  constructor () {
    this.firstPosition = null
    this.lastPosition = null
    this.length = 0
  }

  enqueue (data: any): void {
    const nodeMemory = new Node(data)
    if (!this.firstPosition) {
      this.firstPosition = nodeMemory
      this.lastPosition = nodeMemory
      return
    }
    this.lastPosition.next = nodeMemory
    this.lastPosition = nodeMemory

    this.length++
  }

  dequeue (): void {
    if (!this.firstPosition) return
    if (this.firstPosition === this.lastPosition) {
      this.lastPosition = null
    }
    this.firstPosition = this.firstPosition.next
    this.length--
  }

  print (positionData: Node | null): void {
    if (!positionData) return
    console.log(positionData.data)
    positionData = positionData.next

    this.print(positionData)
  }
}
