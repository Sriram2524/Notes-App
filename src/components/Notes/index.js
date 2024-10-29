// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  BgContainer,
  NotesHeading,
  Form,
  Input,
  Inputt,
  Button,
  EmptyContainer,
  EmmptyHeading,
  Img,
  Para,
  UnorderedList,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, titleFun] = useState('')
  const [note, noteFun] = useState('')
  const [noteDetals, noteDetalsFun] = useState([])

  const onChangeTitle = event => titleFun(event.target.value)

  const onChangeNote = event => noteFun(event.target.value)

  const onSubmitForm = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      note,
    }

    noteDetalsFun(preState => [...preState, newNote])
    titleFun('')
    noteFun('')
  }

  return (
    <BgContainer>
      <NotesHeading>Notes</NotesHeading>
      <Form onSubmit={onSubmitForm}>
        <Input
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="Title"
        />
        <Inputt
          type="text"
          value={note}
          onChange={onChangeNote}
          placeholder="Take a Note..."
        />
        <Button type="submit">Add</Button>
      </Form>
      {noteDetals.length === 0 ? (
        <EmptyContainer>
          <Img
            alt="notes empty"
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
          />
          <EmmptyHeading>No Notes Yet</EmmptyHeading>
          <Para>Notes you add will appear here</Para>
        </EmptyContainer>
      ) : (
        <UnorderedList>
          {noteDetals.map(each => (
            <NoteItem key={each.id} eachNoteDetails={each} />
          ))}
        </UnorderedList>
      )}
    </BgContainer>
  )
}
export default Notes
