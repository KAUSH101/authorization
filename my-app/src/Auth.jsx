import React, {  useState } from "react";
import axios from "axios";
import {
  useToast,
  Button,
  Input,
  form,
  FormLabel,
  Text,
  Box,
  HStack,
  Radio,
  RadioGroup,
  Heading,
  Image
} from "@chakra-ui/react";
function Auth() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState(false);
  const [button, setButton] = useState(true);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [working, setWorking] = useState("");
  const [auth,setAuth]=useState(false)
  const[user,setUser]=useState({})
  const [selectedImage, setSelectedImage] = useState(null);
  const toast = useToast();

  const handleSignup = () => {
    setForm(true);
    setVisible(false);
    setButton(false);
  };
  const handleLogin = () => {
    setVisible(true);
    setForm(false);
    setButton(false);
  };
  const handleBack = () => {
    // setBack(true)
    setVisible(false);
    setForm(false);
    setButton(true);
  };
 
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      name: name,
      number: number,
      email: email,
      password: password,
      company: company,
      workingStatus: working,
    };
   if(name===""||number===''||email===''||password===''||company===''||working===''){
    alert('Fill All The Details')
   }else{
    try {
        let res = await axios.post(`https://json-fev1.onrender.com/users`, obj);
        toast({
          title: "Registered Successfully.",
          description: "Registered",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setName('')
        setCompany('')
        setEmail('')
        setPassword('')
        setNumber('')
        setWorking('')
        setForm(false)
        setVisible(true)
      } catch (error) {
        toast({
          title: "Invalid Request",
          description: "Please Try Again",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
   }
  
  };

  const handleSignin=async(e)=>{
e.preventDefault()


try {
    let res = await axios.get(`https://json-fev1.onrender.com/users?email=${email}&password=${password}`)
    if(res.data.length>0){
        toast({
            title: "Log In Successfully.",
            description: "Logged In",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setVisible(false)
          setAuth(true)
          setEmail('')
          setPassword('')
          let data = res.data[0]
       setUser(data)
       

      
    }else{
        toast({
            title: "Wrong Credentials",
            description: "Wrong Credentials",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
    }
    
} catch (error) {
    console.log(error);
}

  }
  const handleHome=()=>{
    setAuth(false)
    setButton(true)
  }


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };



  return (
    <Box>
      {button ? (
        <Box>
          <Heading>Welcome to PopX</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          <Button
            style={{
              background: "blue",
              color: "white",
              width: "220px",
              border: "none",
              height: "40px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handleSignup}
          >
            Create Account
          </Button>
          <br />
          <Button
            style={{
              background: "blue",
              color: "white",
              width: "220px",
              border: "none",
              height: "40px",
              margin: "10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handleLogin}
          >
            Already Registered? Login
          </Button>
        </Box>
      ) : null}

      {visible ? (
        <Box>
             <Text style={{color:'red',cursor:'pointer'}} onClick={handleBack}>Back</Text>
          <h1>Login</h1>
          <form onSubmit={handleSignin} style={{ width: "30%", margin: "auto" }} action="">
            <FormLabel>Email Address</FormLabel>
            <Input type="text" placeholder="email address"   value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <br />
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="password"   value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <br />
            <Input  style={{ background: "green", color: "white", cursor: "pointer" }} type="submit" />
            <Text style={{color:'red',cursor:'pointer'}} onClick={handleBack}>Back</Text>
          </form>
        </Box>
      ) : null}
      {form ? (
        <Box>
          <Text style={{color:'red',cursor:'pointer'}} onClick={handleBack}>Back</Text>
          <h1>Sign Up</h1>
          <form
            style={{ width: "30%", margin: "auto" }}
            onSubmit={handleSubmit}
            action=""
          >
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              placeholder="full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="number"
              placeholder="phone-number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <br />
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <FormLabel>Company Name</FormLabel>
            <Input
              type="text"
              placeholder="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <br />
            <FormLabel>Are you working?</FormLabel>
            <br />

            <RadioGroup defaultValue="no">
              <HStack spacing="24px">
                <Radio
                  name="status"
                  value={"yes"}
                  onChange={(e) => setWorking(e.target.value)}
                >
                  Yes
                </Radio>
                <Radio
                  name="status"
                  value={"no"}
                  onChange={(e) => setWorking(e.target.value)}
                >
                  No
                </Radio>
              </HStack>
            </RadioGroup>

            <Input
              style={{ background: "green", color: "white", cursor: "pointer" }}
              type="submit"
            />
          </form>
          <Text style={{color:'red',cursor:'pointer'}} onClick={handleBack}>Back</Text>
        </Box>
      ) : null}
   { auth?  <Box> 
    
    <Heading>Profile Settting</Heading>
   


<Box>
    <Text>Upload Profile picture</Text>
      <Input style={{width:'9%',margin:'auto'}}  type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <Box style={{height:'100px',width:'100px',margin:'auto',borderRadius:'15px',border:'1px solid black'}}>
          <Image style={{height:'100px',width:'100px',margin:'auto',borderRadius:'15px'}} src={URL.createObjectURL(selectedImage)} alt="Selected" />
       
        </Box>
      )}
    </Box>

<Text>Welcome {user.name}</Text>
<Text>Email: {user.email}</Text>
<Text>Company :{user.company}</Text>
<Text>Phone Number :{user.number}</Text>
<Button style={{color:'white',cursor:'pointer',fontWeight:'bold',background:'red'}} onClick={handleHome} > Logout</Button>
      </Box>:null}

    </Box>
  );
}
export default Auth;
