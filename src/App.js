import { useState } from 'react';
import './App.css';

function App() {

  const [student, setStudent] = useState({ uname: "", email: "", password: "" });

  const [data, setData] = useState(JSON.parse(localStorage.getItem("edit")) || []);


  const handleChange = (e) => {
    console.log(e.target.name)
    setStudent({ ...student, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {

    setData([...data, student])

    localStorage.setItem("edit", JSON.stringify([...data, student]));
  }
  console.log(data);
  console.log(student);

  // checkbox
  const [leng, setLeng] = useState([]);

  const checkChange = (e) => {
    if (leng.includes(e.target.value)) {
      setLeng(leng.filter((item) => item !== e.target.value));
    }
    else {
      setLeng([...leng, e.target.value]);
    }

  }
  console.log(leng);


  const checkAll = () => {

    if (leng.length === data?.length) {
      setLeng([]);

    } else {
      setLeng(data.map((item) => item.email));
    }

  }

  // Delete Selected
  const deleteChecked = () => {
    const filterdData = data.filter((item) => !leng.includes(item.email))
    setData(filterdData)
    localStorage.setItem('edit', JSON.stringify(filterdData))
  }


  return (

    <>
      <div>

        <div style={{ backgroundImage: "url(https://i.pinimg.com/736x/bd/c6/ba/bdc6bad25f6133f12ba39364e0bc9b9a.jpg)", height: "955px", width: "100%", backgroundSize: "cover" }} className='flex flex-col justify-center items-center'>

          <div className='flex flex-col items-center gap-[60px] ml-[35%]'>

            <div className='flex flex-col gap-3'>
              <label htmlFor='uname' className='text-2xl font-bold text-[#3c5517]'>User Name:-</label>
              <input type='text' id='uname' name='uname' value={student.uname} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#d39c65] text-[#3c5517] font-bold' />
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor='email' className='text-2xl font-bold text-[#3c5517]'>E-mail:-</label>
              <input type='email' id='email' name='email' value={student.email} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#d39c65] text-[#3c5517] font-bold' />
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor='password' className='text-2xl font-bold text-[#3c5517]'>Password:-</label>
              <input type='password' id='password' name='password' value={student.password} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#d39c65] text-[#3c5517] font-bold' />
            </div>

            <div>
              <button type='submit' onClick={() => handleSubmit()} className='bg-transparent h-[50px] w-[200px] rounded-md border-[#d39c65] text-[#3c5517] text-2xl font-bold mt-[20px]'>Submit</button>
            </div>

          </div>

        </div>

        <div className='flex justify-center mt-[5%]'>
          <button type='button' onClick={deleteChecked} className='h-[40px] w-[200px] bg-transparent text-[16px] font-bold text-[#3c5517] border-[#d39c65] border-2 text-[20px] rounded'>Delete Selected</button>
        </div>


        <div className='flex justify-center mt-[5%]'>

          <table>
            <thead>
              <th>User Name:</th>
              <th>E-mail:</th>
              <th>Password:</th>
              <th>Checkbox:<input type="checkbox" value="all" checked={leng.length === data?.length} onChange={(e) => checkAll(e)} /></th>
            </thead>

            <tbody>
              {data.map((item, index) => {
                return (
                  <tr>
                    <td>{item.uname}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.checkbox}<input type="checkbox" value={item.email} checked={leng.includes(item.email)} onChange={(e) => checkChange(e)} /></td>
                  </tr>
                )
              })}
            </tbody>


          </table>

        </div>

      </div>

    </>
  );
}

export default App;
