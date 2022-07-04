import React from 'react';
import { Button, TextField } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
const Main = () => {
    const [code,setCode] = React.useState('')
    const onSubmitCode=(e)=>{
      e.preventDefault()
      console.log(code)
    }
    return (
      <div className="
      flex 
      items-center 
      justify-center 
      w-screen 
      h-screen 
     
        ">
          <div className='
            bg-blue-200 
            rounded-2xl
            p-10
            text-2xl
            '
          >
            Create quiz or join somebody by code
            <div className='
              pt-8
              md:flex
              space-x-5
              md:justify-center
              '
            >
              <Button 
                startIcon={<AddBoxIcon/>}
              >
                New Quiz
              </Button>
              <form onSubmit={onSubmitCode}>
                <TextField label="Enter Code" onChange={(e)=>{setCode(e.target.value)}}/>
              </form>
            </div>
          </div>
      </div>
    )
}

export default Main