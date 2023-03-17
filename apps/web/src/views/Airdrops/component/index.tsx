import {Text, Flex, Heading, Input, Row } from '@pancakeswap/uikit'
 export default function Airdrops() {
    return (
        <>
         <Heading style={{margin:'25px', fontSize:'60px'}}>
      Aidropper
        <Text>Use Locker to lock your tokens or liquidity and earn greater trust within your community</Text>

    </Heading>

        <Flex  justifyContent= 'row'style={{padding: '30px', borderRadius:'8px', backgroundColor:'white', width: 'max-auto'}}>
           <div>
           <Row>
            <Input type="text" scale="md" placeholder='Enter Your Token Contract Address' style={{padding:"8px", margin:"10px", width:"80%"}}/>
            </Row>
            {/* a textArea should be here instead  */}
            <Row>
            <Input type="text" scale="md" placeholder='Distribution List' style={{padding:"100px", margin:"10px", width:"200%"}}/>
            </Row>
           </div>
           <div style={{flexDirection: 'column'}}>
           <Text color='#9a6aff' style={{margin:'60px'}}>
           <p>Ex. 0x533C503d97C93B4ac1c6AE8D034c91A72FdF145F,1000</p>
           <p> 0x888D2F717Dc256617441F989591822dc8D376748,600</p>
            <p> 0xe728546A7583a43c7fB56315B27953217B36fA1D,1000</p>
           <p> For best results we recommend you do a maximum of 500 Addresses at a time!</p>
           </Text>
           
           <Heading color='#9a6aff' style={{margin:'30px'}}>Total token being Airdroped: 0</Heading>
           </div>
         
            
        </Flex>
        <div style={{flexDirection:'column' ,alignItems:'center'}}>
           <button type="button" style={{
               width: '40vh',
               borderRadius: '25px' ,
                backgroundColor:'#9a6aff',
                padding:'8px',
                boxShadow: '2rem',
                margin:'5px',
               
              }}>
               Connect Wallet
         
         </button>
            </div> 
        </>
    )

 }