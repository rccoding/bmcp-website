import React from 'react';
import './sollutions.css';
import useStyles from './style';
import sol from './sol.png';
import app from './app.svg';
import bi from './bi.svg';
import crm from './crm.svg';
import web from './web.svg';
import project from './project.svg';
import security from './security.svg';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Avatar, Button,Paper, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Slide, Typography } from '@material-ui/core';
import { blue, green } from '@material-ui/core/colors';
import { react } from '@babel/types';


const Solutions : React.FC =()=>{
  const classes=useStyles();
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);
  
 

  return (

    <div className="App">
    <Grid container  spacing={2}>
                  <Grid item xs={12}>
        <Grid container justify="space-evenly" spacing={10}>
            <Grid item xs ={4}>
              <Card className="card" >
                              <img src={crm} alt="this is car image" width="100px"/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                            Customer Relation Management     
                                        </Typography>
                    
                    CRM is the base of any business which caters to either B2C or B2B customers
              Keep your customers engaged by providing real time updates and reminders
              Announce discount offers, special launches with campaign function
              Real time tracking of business operation without relying on manual reports
              Employee mgmt. with access control	

                   
                </CardContent>
            </Card>
            </Grid>
                  <Grid item xs={4}>
                      <Card className='card'>
                          <img src={web} alt="this is car image" width="100px"/>
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                              Web Design
                              </Typography>
                              If You Are Searching For A Company That Is Known For Developing A Responsive Website, No 
              Matter What Is The Type Of Website (E-Commerce Website, Dynamic Or Static Website) Then You Are At A Right Place. Because We Bring To You All The Creative
               & Customized Solutions. We Believe In Offering Elegant And Unique Website Designs All Under Affordable Price And Within The Scheduled Time.

                    
                          </CardContent>
                      </Card>
                  </Grid>
                      <Grid item xs={4} >
                          <Card className="card" >
                          <img src={app} alt="this is car image" width="100px"/>
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                  App Development
                                  </Typography>
                                  
                                  From concept to development, We cover the entire
                                   mobile app development cycle, no matter how diverse 
                                   or complex your needs are. Our ability to meet your 
                                   needs stem from our team of experts, who have years of 
                                   experience in global app solution services and product
                                    engineering industries.We can built Apps for 
              Andriod & Apple OS as per customer requirement.
                    
                              </CardContent>
                          </Card>
                  </Grid>
                      </Grid>
              <Grid container justify="center" spacing={10} >
              <Grid item xs={6}>
                      <Card className="card" >
                              
             <img src={bi} alt="this is car image" width="100px"/>
                     
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                              Business Intelligence
                              </Typography>
                          
                              BI(Business Intelligence) is a set of processes, architectures, and technologies that convert raw data into meaningful information that drives profitable business actions.It is a suite of software and services to transform data into actionable intelligence and knowledge.
BMCP can develop full functionally intelligence to manage your business with ease. 

                   
                          </CardContent>
                      </Card>
                  </Grid>
                  <Grid item xs={6} style={{background:"transparent"}} >
                      {/* <Card className="card1"style={{width: "600px",alignContent:"start"}} > */}
                      <div className="cont" data-aos="fade-left">
             <img src={sol} alt="this is car image" />
                      </div>      
                      {/* </Card> */}
                  </Grid>
                  

                  <Grid item xs={4}>
                      <Card className="card">
    
                          <img src={security} alt="this is car image" width="100px"/>   
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                              Security Testing
                              </Typography>
                 
                              Security Testing is a type of Software Testing that uncovers vulnerabilities
                               of the system and determines that the data and resources of the system are protected from
                               possible intruders. It ensures that the software system and application are free from any threats or risks that can cause a loss.

                    
                          </CardContent>
                      </Card>
                      
                    
                  </Grid>
             
              <Grid item xs={4}>
        
                      <Card className="card">
                      
                      <img src={project} alt="this is car image" width="100px"/>
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                              Project Maintenance
                              </Typography>
                 
                              Four types of maintenance, namely, corrective, adaptive, perfective, and preventive.
                            Corrective maintenance deals with the repair of faults or defects found in day-today system functions.
                            In the event of a system failure due to an error, actions are taken to restore the operation of the software system.
                            BMCP is capable to maintain your ongoing project.

                    
                          </CardContent>
                      </Card>
                      </Grid>
                      
                  </Grid>
              </Grid>
                      </Grid>
      
    </div>
  );
}

export default Solutions;
