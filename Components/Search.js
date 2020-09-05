
import {Tab,Form} from "react-bootstrap"
import Tabs from "react-bootstrap/Tabs"
import styles from "../styles/Search.module.css"
export default function Search() {
    return (
        <div className="my-5">
        <Tabs defaultActiveKey="Search" id="uncontrolled-tab-example" >
        <Tab eventKey="Search"  title={<span className={styles.Flex_switch}><img src="favicon.ico" className={styles.logo_switch}/> Tab1</span>}>
        <Form>
        <div className="col-12">
          <br/><br/>
          <br/><br/>
       
          <div className={styles.input_style_main}>
  <Form.Group controlId="exampleForm.ControlSelect1" className={styles.abs_form_icon+" pr-3"}>

    
    <Form.Control as="select" className={styles.border_none+" ml-3"}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
   <img src="favicon.ico" className={styles.input_img}  />
  </Form.Group>
  </div>
  </div>
 <div className="col-12 ">
 <br/>
          <div className={styles.small_input}>
          <div  className={styles.input_style_main +" col-5"}>
  <Form.Group controlId="exampleForm.ControlSelect1" className={styles.abs_form_icon}>

    
    <Form.Control as="select" className={styles.border_none}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
   <img src="favicon.ico" className={styles.input_img}  />
  </Form.Group>
  </div>
  <div  className={styles.input_style_main +" col-5"}>
  <Form.Group controlId="exampleForm.ControlSelect1" className={styles.abs_form_icon}>

    
    <Form.Control as="select" className={styles.border_none}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
   <img src="favicon.ico" className={styles.input_img}  />
  </Form.Group>
  </div>
  </div>
 </div>
 <div className="col-12 ">
 <br/>
 <div className={styles.input_style_main}>
<Form.Group controlId="exampleForm.ControlSelect1" className={styles.abs_form_icon +" pr-3"}>

<Form.Control  type="text" placeholder="Small text"  className={styles.border_none+" ml-3"} />
<img src="favicon.ico" className={styles.input_img}  />
</Form.Group>
</div>
</div>
  </Form>
        </Tab>
        <Tab eventKey="details" title={<span className={styles.Flex_switch}><img src="favicon.ico" className={styles.logo_switch}/> Tab1</span>}>
        <Form>
        <div className="col-12">
          <br/><br/>
          <br/><br/>
       
          <div className={styles.input_style_main}>
  <Form.Group controlId="exampleForm.ControlSelect1" className={styles.abs_form_icon+" pr-3"}>

    
    <Form.Control as="select" className={styles.border_none+" ml-3"}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
   <img src="favicon.ico" className={styles.input_img}  />
  </Form.Group>
  </div>
  </div>
 <div className="col-12 ">
 <br/>
          <div className={styles.small_input}>
          <div  className={styles.input_style_main +" col-5"}>
  <Form.Group controlId="exampleForm.ControlSelect1" className={styles.abs_form_icon}>

    
    <Form.Control as="select" className={styles.border_none}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
   <img src="favicon.ico" className={styles.input_img}  />
  </Form.Group>
  </div>
  <div  className={styles.input_style_main +" col-5"}>
  <Form.Group controlId="exampleForm.ControlSelect1" className={styles.abs_form_icon}>

    
    <Form.Control as="select" className={styles.border_none}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
   <img src="favicon.ico" className={styles.input_img}  />
  </Form.Group>
  </div>
  </div>
 </div>
 <div className="col-12 ">
 <br/>
 <div className={styles.input_style_main}>
<Form.Group controlId="exampleForm.ControlSelect1" className={styles.abs_form_icon +" pr-3"}>

<Form.Control  type="text" placeholder="Small text"  className={styles.border_none+" ml-3"} />
<img src="favicon.ico" className={styles.input_img}  />
</Form.Group>
</div>
</div>
  </Form>
        </Tab>
        
      </Tabs>
        </div>
    )
}  