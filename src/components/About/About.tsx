import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Slide, SvgIcon, SvgIconProps, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './index'
import manojWadwan from '../../images/manojWadwan.png'
import vishalBharti from '../../images/vishalBharti.png'
import himanshuSharma from '../../images/himanshuSharma.png'
import sushilShrivastav from '../../images/sushilShrivastav.png'
import rishabSahani from '../../images/rishabSahani.png'
import ourvision from '../../images/ourvision.png'
import agility from '../../svgs/agility.svg'
import dependebility from '../../svgs/dependebility.svg'
import innovation from '../../svgs/innovation.svg'
import simplicity from '../../svgs/simplicity.svg'
import sustainability from '../../svgs/sustainability.svg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
 
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
                <h1 className={classes.header}>Our Vision</h1>
            <h2>“To be the customer’s most trusted choice for service through continual improvement, ethical practices and commitment to achieve highest."</h2>
                <h1 className={classes.header}>About US</h1>
            <h3 className={classes.aboutPara}>
                Incepted in Yr.2016. BMCP is a fast growing neutral service provider in Mobile Handset, Consumer Electronics,
                Home Appliances, IT Solutions & hardware and Office Automation. We support our customers to do business better by leveraging our deep
                customer service experience , experienced team , process driven approach , comprehensive portfolio of services and vertically aligned
                business model. Multi brand service capability and strong service management process makes us a preferred destination for customers looking
                for a long term solution to their service related needs We have grown YoY in C-sat , Customer call nos: managed and revenues since Yr.2016.
                Multi-brand service capability and strong service management system (B-smarT)
                make us a preferred destination for customers looking for a long term solution to their service-related needs
            </h3>
                <h3 className={classes.aboutPara}>
                    Based in the heart of India we aim high at being focused on building relationships with our clients and community. BMCP provides end to
                    end customer care solutions for mobile and wearable devices. We help many of the world’s leading mobile and wearable device companies deliver
                     a superior aftersales service experience. Using our creative gifts drives this foundation. Our experience allows clients to optimize the entire 
                    customer care journey of consumers with their devices by ensuring an excellent and consistent customer care experience.
            </h3>
            </div>
            <h1 className={classes.header} >We Value</h1>
            <Grid container className={classes.root} spacing={2} color="primary">
                <Grid item xs={2}>
                            <Card className={classes.Svg}>
                                <img src={agility} alt="this is car image" width="70px" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <b> Agility</b>
                                        <h3 className={classes.SvgText}>Lead change through ownership </h3>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                <Grid item xs={2}>
                            <Card className={classes.Svg}>
                                <img src={dependebility} alt="this is car image" width="70px" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <b>Dependebility</b>
                                        <h3 className={classes.SvgText}> Build trust through commitment and execution </h3>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                <Grid item xs={2}>
                            <Card className={classes.Svg}>
                                <img src={innovation} alt="this is car image" width="70px" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <b> Innovation </b>
                                        <h3 className={classes.SvgText}>Create and deliver value through disruption</h3>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                <Grid item xs={2}>
                            <Card className={classes.Svg}>
                                <img src={simplicity} alt="this is car image" width="70px" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <b> Simplicity </b>
                                        <h3 className={classes.SvgText}>Clarity of thought in all interactions</h3>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={2}>
                            <Card className={classes.Svg}>
                                <img src={sustainability} alt="this is car image" width="70px" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <b> Sustainability </b>
                                        <h3 className={classes.SvgText}>What we do today must help us tomorrow</h3>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        </Grid>

            <h1>Management Team</h1>

               <Grid container className={classes.root} spacing={2} color="primary">
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
                      <b> Manoj Wadwan</b>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                         <b>Founder</b>
                    </Typography>
                                    <Link href="https://www.linkedin.com/in/manoj-wadhawan-76613318b/"  ><LinkedInIcon className={classes.icon}/></Link>
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
                                      <b>Vishal Bharti</b>
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <b>Director Operations</b>
                                    </Typography>
                                    <Link href="https://www.linkedin.com/in/vishal-bharti-89222213/"  ><LinkedInIcon className={classes.icon} /></Link>
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
                                            <b>Sushil Shrivastav</b>
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        <b>Director Sales</b>
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
                                       <b>Himanshu Sharma</b>
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                       <b>Accounts Head</b>
                                    </Typography>
                                    <Link href="https://www.linkedin.com/in/himanshu-sharma-0026a8146/"  ><LinkedInIcon className={classes.icon} /></Link>
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
                                     <b>  Rishab Sahani</b>
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                      <b> Manager Operations</b>
                                    </Typography>
                                    <Link href="https://www.linkedin.com/in/rishab-sahani-864ab6100/"  ><LinkedInIcon className={classes.icon} /></Link>
                                </CardContent>
                            </Card>
                        </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
            </div>
    )
}
