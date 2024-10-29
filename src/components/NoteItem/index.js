// Write your code here
import {List, ListHeading, ListParagraph} from './styledComponents'

const NoteItem = props => {
  const {eachNoteDetails} = props
  const {title, note} = eachNoteDetails

  return (
    <List>
      <ListHeading>{title}</ListHeading>
      <ListParagraph>{note}</ListParagraph>
    </List>
  )
}
export default NoteItem
