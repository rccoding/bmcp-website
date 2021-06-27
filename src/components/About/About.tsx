import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Slide, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './index'
import manojWadwan from '../../images/manojWadwan.png'
import vishalBharti from '../../images/vishalBharti.png'
import sachinSharma from '../../images/sachinSharma.png'
import himanshuSharma from '../../images/himanshuSharma.png'
import sushilShrivastav from '../../images/sushilShrivastav.png'
import rishabSahani from '../../images/rishabSahani.png'
import ourvision from '../../images/ourvision.png'
export const About: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Slide direction="left" in={true} >
                <Avatar
                    className={classes.sidepic}
                    alt="Nat Geo"
                    src={ourvision}
                />
                </Slide>
            <h1>Our Vision</h1>
            <h2>“To be the customer’s most trusted choice for service through continual improvement, ethical practices and commitment to achieve highest."</h2>
            <h1>About US</h1>
            <br></br>
            <h3>
                Incepted in Yr.2016. BMCP is a fast growing neutral service provider in Mobile Handset, Consumer Electronics,
                Home Appliances, IT Solutions & hardware and Office Automation. We support our customers to do business better by leveraging our deep
                customer service experience , experienced team , process driven approach , comprehensive portfolio of services and vertically aligned
                business model. Multi brand service capability and strong service management process makes us a preferred destination for customers looking
                for a long term solution to their service related needs We have grown YoY in C-sat , Customer call nos: managed and revenues since Yr.2016.
                Multi-brand service capability and strong service management system (B-smarT)
                make us a preferred destination for customers looking for a long term solution to their service-related needs
            </h3>
            <br></br>
            <h3>
                    Based in the heart of India we aim high at being focused on building relationships with our clients and community. BMCP provides end to
                    end customer care solutions for mobile and wearable devices. We help many of the world’s leading mobile and wearable device companies deliver
                     a superior aftersales service experience. Using our creative gifts drives this foundation. Our experience allows clients to optimize the entire 
                    customer care journey of consumers with their devices by ensuring an excellent and consistent customer care experience.
            </h3>
            </div>
            <h1>We Value</h1>
            <h1>Management Team</h1>

               <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={10}>
            <Grid item>
               <Card className={classes.card}>
                <Avatar
                    className={classes.media}
                    alt="Nat Geo"
                    src={manojWadwan}
                   />
                 <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Manoj Wadwan
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Founder
                    </Typography>
                 </CardContent>
            </Card>
            </Grid>
                        <Grid item>
                            <Card className={classes.card}>
                                <Avatar
                                    className={classes.media}
                                    alt="Nat Geo"
                                    src={vishalBharti}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                      Vishal Bharti
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Director Operations
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                            <Grid item>
                                <Card className={classes.card}>
                                    <Avatar
                                        className={classes.media}
                                        alt="Nat Geo"
                                        src={sushilShrivastav}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Sushil Shrivastav
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Director Sales
                                        </Typography>
                                    </CardContent>
                                </Card>
                        </Grid>
                            </Grid>
                    <Grid container justify="center" spacing={10}>
                        <Grid item>
                            <Card className={classes.card}>
                                <Avatar
                                    className={classes.media}
                                    alt="Nat Geo"
                                    src={himanshuSharma}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Himanshu Sharma
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Accounts Head
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card className={classes.card}>
                                <Avatar
                                    className={classes.media}
                                    alt="Nat Geo"
                                    src={rishabSahani}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                     Rishab Sahani
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Manager Operations
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                            </Grid>
                        </Grid>
            </div>
    )
}
