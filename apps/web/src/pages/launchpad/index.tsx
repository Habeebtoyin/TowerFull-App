import {Text, Heading, Input, Row, Checkbox, Flex} from '@pancakeswap/uikit'
import { color } from 'styled-system';
export default function Index() {
    return ( 
      <>
      
      <Heading style={{margin:'25px', fontSize:'60px'}}>
      Sales
        <Text>Use Locker to lock your tokens or liquidity and earn greater trust within your community</Text>

    </Heading>
        <Flex  style={{padding: '30px', borderRadius:'8px', backgroundColor:'white', width: 'max-auto'}}>
            <div style={{margin:"20px"}}>
                <Heading color="#9a6aff" >
                    Contribution Currency
             </Heading>
   <div style={{display: "flex",margin:"10px"}}>
    
    <Text fontSize='20px' color="#9a6aff">CMP:<Checkbox scale="sm"/></Text>
      <Text fontSize='20px' color="#9a6aff"> Tws: <Checkbox scale="sm"  value='Tws'/></Text>

      </div> 
         <div style={{margin: "5px"}}>
            <Row>
            <Input type="text" scale="md" placeholder='Enter Your Token Contract Address' style={{padding:"2px", margin:"10px", width:"70%"}}/>
            </Row>
            
            <Row>
            <Input type="text" scale="md" placeholder='Enter Your Wallet Address' style={{padding:"2px", margin:"10px", width:"70%"}}/>
            </Row>
            <Row>
            <Input type="text" scale="md" placeholder='Enter Presale Rate, eg 70' style={{padding:"2px", margin:"10px", width:"70%"}}/>
            </Row>
            
            <Flex flexDirection ="row" width='75%' >
               
            <Input type="text" scale="md" placeholder='Enter Soft Cap' style={{padding:"2px", margin:"10px", width:"70%"}}/>
            
            <Input type="text" scale="md" placeholder='Enter Hard Cap' style={{padding:"2px", margin:"10px", width:"70%"}}/>
            </Flex>
            
            <Flex flexDirection ="row"  width='75%' >
            <Input type="text" scale="md" placeholder='Enter Min Contr' style={{padding:"2px", margin:"10px", width:"70%"}}/>
            
            <Input type="text" scale="md" placeholder='Enter Max Contr' style={{padding:"2px", margin:"10px", width:"70%"}}/>
            </Flex>
            <Row>
            <Input type="text" scale="md" placeholder='Enter Liquidity(%)' style={{padding:"2px", margin:"10px", width:"70%"}}/>
            </Row>
            <Row>
            <Input type="text" scale="md" placeholder='Enter Listing Rate' style={{padding:"2px", margin:"10px", width:"70%"}}/>
            </Row>
            <Row>
            <Input type="text" scale="md" placeholder='Enter Preasle Start Time' style={{padding:"2px", margin:"10px", width:"70%"}}/>
            </Row>
            <Row>
            <Input type="text" scale="md" placeholder='Enter Presale End Time' style={{padding:"2px", margin:"10px", width:"70%"}}/>

            </Row> 
            <Row>
            <Input type="text" scale="md" placeholder='Enter Liquidity Unlock Time' style={{padding:"2px", margin:"10px", width:"70%"}}/>

            </Row> 
            <Heading color="#9a6aff">Sale Types:</Heading>
            <Flex  flexDirection ="row" justifyContent='space-between' width='40%' margin='5px' >
              <Flex justifyContent='space-between'>
              <Text fontSize='20px' color="#9a6aff">Public:<Checkbox scale="sm"/></Text>
            <Text fontSize='20px' color="#9a6aff">Private:<Checkbox scale="sm"/></Text>
              </Flex>
           
            </Flex>  
            <Row>
            <Input type="text" scale="md" placeholder='Logo (optional)' color="#9a6aff" style={{padding:"2px", margin:"10px", width:"70%"}}/>

            </Row> 
            
            <button type="button" style={{
               width: '70%',
               borderRadius: '25px' ,
                backgroundColor:'#9a6aff',
                padding:'8px',
                boxShadow: '2rem',
                margin:'5px'
              }}>
               Create
         
         </button>


         </div>
                     
            </div>  
            <span>
               
            </span>
            </Flex>
          
             
            
            </>

    )
}