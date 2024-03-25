import { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'

import NewTaskForm from '../new-task-form'
import Footer from '../footer'
import TaskList from '../task-list'
import './app.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  onDone = (id) => {
    const { data } = this.state
    const doneEl = data.map((obj) => {
      const item = obj
      if (item.id === id) {
        if (item.classItem === '') {
          item.classItem = 'completed'
        } else {
          item.classItem = ''
        }
      }
      return item
    })

    this.setState({
      data: doneEl,
    })
  }

  onClearDone = () => {
    const { data } = this.state
    const activeItems = data.filter((el) => el.classItem !== 'completed')

    this.setState({
      data: activeItems,
    })
  }

  onDeleted = (id) => {
    const { data } = this.state
    const newArr = data.filter((el) => el.id !== id)

    this.setState({
      data: newArr,
    })
  }

  onAdded = (description, min, sec) => {
    const { data } = this.state
    const randomNum = Math.floor(Math.random() * 10000)

    const newItem = {
      id: randomNum,
      classItem: '',
      description,
      hidden: '',
      timeAdded: new Date(),
      timeFromAdded: '',
      timeTimer: `${min}:${sec}`,
    }

    const newArr = data.concat(newItem)
    newArr.forEach((el) => {
      const item = el
      item.timeFromAdded = formatDistanceToNow(item.timeAdded, {
        includeSeconds: true,
      })
    })

    this.setState({
      data: newArr,
    })
  }

  onEdit = (id) => {
    const { data } = this.state
    const newArr = data.map((e) => {
      const item = e
      if (item.id === id) {
        item.classItem = 'editing'
      }
      return item
    })

    this.setState({
      data: newArr,
    })
  }

  onEditDone = (value, id) => {
    const { data } = this.state
    const idNum = Number(id)
    const newArr = data.map((e) => {
      const item = e
      if (item.id === idNum) {
        item.classItem = ''
        item.description = value
      }
      return item
    })

    this.setState({
      data: newArr,
    })
  }

  onToggleFilter = (status) => {
    const { data } = this.state
    let newArr = data.map((el) => {
      const item = el
      item.hidden = ''
      return item
    })

    if (status === 'Active') {
      newArr = data.map((el) => {
        const item = el
        if (item.classItem === 'completed') {
          item.hidden = 'hidden'
        }
        return item
      })
    } else if (status === 'Completed') {
      newArr = data.map((el) => {
        const item = el
        if (item.classItem !== 'completed') {
          item.hidden = 'hidden'
        }
        return item
      })
    }

    this.setState({
      data: newArr,
    })
  }

  render() {
    const { data } = this.state
    const dataLength = data.filter((el) => el.classItem !== 'completed').length

    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onAdded={this.onAdded} />
        </header>
        <section className="main">
          <TaskList
            dataTodo={data}
            onDone={this.onDone}
            deleted={this.onDeleted}
            onEdit={this.onEdit}
            onEditDone={this.onEditDone}
          />
        </section>
        <Footer onClearDone={this.onClearDone} numItemsLeft={dataLength} onToggleFilter={this.onToggleFilter} />
      </>
    )
  }
}
