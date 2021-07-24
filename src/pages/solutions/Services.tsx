import React from 'react';
import useStyles from './style';
import './Services.css';
import reimburse  from './reimburse.svg';
import repair from './repair.svg';
import pickdrop from './pickdrop.svg';
import onsite1 from './onsite1.png';
import reim1  from './reim1.jpg';
import repai1 from './repai1.jpg';
import pnd1 from './pnd1.png';
import am1 from './am1.jpg';
import on from './on.svg';
import amc from './amc.svg';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Avatar, Button,Paper, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Slide, Typography, Hidden } from '@material-ui/core';
import { blue, green } from '@material-ui/core/colors';


const Service : React.FC =()=>{
    const classes=useStyles();
    useEffect(() => {
      Aos.init({duration:2000});
    }, []);
    
 

  return (

    <div className="Service">
       <div className="ser" ><h2>SERVICES</h2> </div>
    <Grid  className={classes.control} container  spacing={0}>
                  <Grid item >
        <Grid container   justify="space-evenly" spacing={5} >
        <Grid item xs={8}>
                <Card className="card1">
                <img src={repair} alt="this is car image" width="100px"/>
                
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Repair Services 
                        </Typography>
                        
                        Repair services are provided to multiple products at Walk-in exclusive and multibrand repaired centers.
                                         We provide L0 to L4 levels repair supports from our centers. Our service centers are
                                          fitted with state of Arts facilities with strict adharance to service level agreement
                                           and customer delight. Our infrastructure’sare ISO certified and handled by multi-skilled
                                            engineers, who are fully equipped to handle component and integrated repairs with ease. 
                                            We have a dedicated integrated call management center, pick-up facilities
                                         and collection processes to make hassle-free service.Accessible to one and all, ensuring our services are always a customer’s delight!
                    </CardContent>
                    
                </Card>
        </Grid>



                  <Grid item xs={4}>
                      <div className="abs"  data-aos="fade-left"  >
                      
                          <img src={repai1} className="media" alt="this is car image" width="500px" />
                         </div>
                  </Grid>



                      
            <Grid item xs={8} >
                <Card className="card1" >
                <img src={on} alt="this is car image" width="100px"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        ON-Site Services
                        </Typography>
                        
                        We are one-stop solutions in all kinds of needs across product
                        lines – Consumer Electronics & Home Appliances; and across multiple global brands:

Products covered:

TV Service – LEDs/LCDs
Washing Machines Maintenance Service
Water Purifiers Maintenance Service
Refrigerator Maintenance Service
Air Condition Maintenance Service
                    </CardContent>
                </Card>
        </Grid>



              
              <Grid item xs={4}>
              <div >      
             <img src={onsite1}  className="media"  alt="this is car image"data-aos="fade-left" height="350px" width="520px" />
             </div> 
             </Grid>
                     
                  

             
              <Grid item xs={8}>
              
                      <Card className="card1">
                      
                      <img src={reimburse} alt="this is car image" width="100px"/>
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                             Reimbursement Services
                              </Typography>
                 
                              In order to help our customers in getting the best throughput from the machine, we have introduced the concept of Annual Maintenance Contracts.

Having tie-up with leading Insurance companies allows us to provide AMC services to Mobile, Laptop, Consumer electronics products.

Our experienced engineers & support staff have the right expertise required for maintenance of machines with computerized controls.
                    
                          </CardContent>
                      </Card>
                  
                      </Grid>

                      <Grid item xs={4}  >
                      
                      <div  data-aos="fade-left">
             <img src={reim1} className="media" alt="this is car image"  height="300px" />
                      </div>      
                    
                  </Grid>
                  <Grid item xs={8}>
                      <Card className="card1">
                      
                      <img src={amc} alt="this is car image" width="100px"/>
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                            AMC Services
                              </Typography>
                              In order to help our customers in getting the best throughput from the machine, we have introduced the concept of Annual Maintenance Contracts.

Having tie-up with leading Insurance companies allows us to provide AMC services to Mobile, Laptop, Consumer electronics products.

Our experienced engineers & support staff have the right expertise required for maintenance of machines with computerized controls.
                             
                          </CardContent>
                      </Card>
                      </Grid>

                      
                      <Grid item xs={4} >

                      <div className="media" data-aos="fade-left">
             <img src={am1} alt="this is car image"  height="300px" width="520px"/>

                      
                      </div>
                  </Grid>
                  
                  <Grid item xs={8} >
                  <Card className="card1">
                      
                      <img src={pickdrop} alt="this is car image" width="100px"/>
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                            Pick & Drop Services
                              </Typography>
                              A Initiative which aims to provide convenience, hassle free, money and time saving solutions to customer.

With large numbers of active service professional is designed to pick handset from customer door step and deliver back after getting repair from authorised service network in record breaking time of 24 HRS.
Having tie ups with leading mobile companies allow us to provide quick and effective service.
                          </CardContent>
                      </Card>
                      </Grid>

                      <Grid item xs={4} style={{background:"transparent"}} >
                      
                      <div  data-aos="fade-left">
             <img src={pnd1}  className="media" alt="this is car image" height="325px" width="520px" />
                        </div>
                  </Grid>

                </Grid>
         </Grid>
     </Grid>      

           
      
    </div>
  );
}

export default Service;
