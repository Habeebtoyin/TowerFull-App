import {Text, Flex, Heading, Button, ButtonMenuItem, Input, Row, Checkbox} from '@pancakeswap/uikit'
import { style } from '@vanilla-extract/css';
import { borderRadius, color } from 'styled-system';
import  {Col} from '@pancakeswap/uikit/src/components/Column/index'


export default function Lock() {

    return (
        <>
            <Heading style={{margin:'25px', fontSize:'60px'}}>
        Token Lockers
        <Text>Use Locker to lock your tokens or liquidity and earn greater trust within your community</Text>

    </Heading>

    
        <Flex flexDirection='row' justifyContent="space-between" width='max-auto' style={{padding: '35px', borderRadius:'8px', backgroundColor:'white'}}>
        <span>
            <Heading textAlign='center' color="#9a6aff" margin='20px'>View Locker</Heading>
            <Flex flexDirection='row' justifyContent='center' margin='20px' color='white'>
            <ButtonMenuItem>My Token Locker</ButtonMenuItem>
          <ButtonMenuItem>My Liquidity Locker</ButtonMenuItem>
          <ButtonMenuItem>View All Locker</ButtonMenuItem>

            </Flex>
            <Row style={{ justifyContent:'center'}}>
            <Input type='search'  scale='md' placeholder="Search by your Toke or LP Address" style={{width:'40%'}}/>
            </Row>
           
        </span>
        <span>
            <Heading textAlign='center' margin='20px' color="#9a6aff">Create Locker</Heading>
            <Flex flexDirection='column' width="80vh" justifyContent='space-between'>
            <Input type="text" scale="md" placeholder='Enter Token or LP address' style={{padding:"2px", margin:"10px", width:"100%"}}/>
              
            <Input type="text" scale="md" placeholder='Unlock Time' style={{padding:"2px", margin:"10px", width:"100%"}}/>
                    
            <Input type="text" scale="md" placeholder='Enter Amount of token to lock' style={{padding:"2px", margin:"10px", width:"100%"}}/>
            </Flex>
            <Flex justifyContent='space-between' margin="0">
  
    

            <button type="button" style={{
               width: '10%',
               borderRadius: '25px' ,
                backgroundColor:'#9a6aff',
                padding:'3px',
                boxShadow: '2rem',
                
              }}>
               25%
         
         </button>
         <button type="button" style={{
               width: '10%',
               borderRadius: '25px' ,
                backgroundColor:'#9a6aff',
                padding:'3px',
                boxShadow: '2rem',
                
              }}>
               50%
         
         </button>
         <button type="button" style={{
               width: '10%',
               borderRadius: '25px' ,
                backgroundColor:'#9a6aff',
                padding:'3px',
                boxShadow: '2rem',
                
              }}>
               75%
         
         </button>
         <button type="button" style={{
               width: '10%',
               borderRadius: '25px' ,
                backgroundColor:'#9a6aff',
                padding:'3px',
                boxShadow: '2rem',
                
              }}>
               Max
         
         </button>
            </Flex>
            <Heading color='#9a6aff' margin='20px'>Select Locker Owner</Heading>
            <Flex flexDirection="row"  justifyContent='space-between'>
            <Text fontSize='20px' color="#9a6aff">Myself:<Checkbox scale="sm"/></Text>
            <Text fontSize='20px'  color="#9a6aff">Someone else:<Checkbox scale="sm"/></Text>
            </Flex>
            <Row  justifyContent= 'center'>
            <button type="button" style={{
               width: '40%',
               borderRadius: '25px' ,
                backgroundColor:'#9a6aff',
                padding:'8px',
                boxShadow: '2rem',
                margin:'5px',
               
              }}>
               Connect Wallet
         
         </button>
            </Row>
          
        
        </span>
        
        </Flex>
        </>
     
    )
}