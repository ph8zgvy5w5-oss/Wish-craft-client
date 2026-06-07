import react from "react"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import Input from "../components/ui/Input"
import Loader from "../components/ui/Loader"
import ProgressBar from "../components/ui/progressBar"
import Select from "../components/ui/Select"
import ToastNotification from "../components/ui/toastNotification"
import Modal from "../components/ui/Modal"

export default function Homepage() {
  return (
    <>
      <div className="h-full w-full "> 
      <h1>Homepage</h1>
      <Button link="/df">Start here</Button>

      <Card link="/df">Start here<p>This a paragraph</p></Card>
       <Input placeholder="hello" label="new Input">hello</Input>
        <ProgressBar percent={50} label="hello"></ProgressBar>
        <Select></Select>
        <Loader></Loader>
        <ToastNotification>This is a notification </ToastNotification>
        <div> this is a regular text <Modal>this is a text for modal</Modal>  </div>
        
      </div>
    </>
  )
}