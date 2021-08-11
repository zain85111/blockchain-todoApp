const TodoList = artifacts.require("./TodoList.sol");

contract('TodoList', (accounts) => {
    before(async () => {
        this.todoList = await TodoList.deployed()
    })
    it('Deployes Successfully', async () => {
        const address = await this.todoList.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })
    it('lists tasks completed', async () => {
        const taskCount = await this.todoList.taskCount()
        const task = await this.todoList.tasks(taskCount)
        assert.equal(task.id.toNumber(), taskCount.toNumber())
        assert.equal(task.content, "This is a default Task. Create on deployment via constructor.")
        assert.equal(task.completed, false)
        assert.equal(taskCount.toNumber(), 1)
    })
})