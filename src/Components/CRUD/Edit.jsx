import React,{useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



function Edit() {
  //ACCEPTING DATA ENTERED IN THE DATA FIELD
  var [data, setData]=useState({});

  //THIS IS STATEMENT IS MEANT TO STORE USER DATA FROM THE DATABASE
  var {id} = useParams();

  //FETCHING THE DATA FROM THE DATABASE
  useEffect(()=>{
    fetchUser();
  }, []);

  function fetchUser(){
      axios.get(`http://localhost/reactAPI/user/${id}`).then((response)=>{
          //console.log(response.data);
          setData(response.data);
      })
  } 

  var handleData = (a)=>{

      //WE CREATED AN EMPTY OBJECT, AN OBJECT MUST CONSIST OF A KEY AND A VALUE. BELOW WE ARE CREATING THE VALUES
      //MAKE SURE YOUR INPUTS CONSISTS OF A name='' ATTRIBUTE WHICH WILL BE IDENTIFIED AS A KEY NAME
      var name=a.target.name;
      var value=a.target.value;

      setData(values => ({...values, [name]: value}));
  }

  //PREVENTS THE FORM FROM RESUBMITTING
  var submitBtn = (a)=>{
      a.preventDefault();

      //AFTER THE DATA HAS BEEN STORED IN OUR SCRIPT, NOW WE CAN SEND IT TO OUR PHP API FILE USING AXIOS
      axios.put(`http://localhost/reactAPI/user/${id}/edit`, data).then((response)=>{
          document.querySelector('.response').innerHTML=response.data;
      });

  }
  return (
    <div>
      <span className='response'></span>
      <div>
          <form onSubmit={submitBtn}>
              <input type="text" placeholder='enter student name' name='studentName' onChange={handleData} /><br/>
              <input type="text" placeholder='enter course' onChange={handleData} name='course' /><br/>
              <button>Update</button>
          </form>
      </div>
      <div>
        <Link to='/'>
          <button>Back</button>
        </Link>
      </div>
    </div>
  )
}

export default Edit
