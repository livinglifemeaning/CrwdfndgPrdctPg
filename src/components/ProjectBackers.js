import { useSelector } from 'react-redux';

import Card from './UI/Card'

import classes from "./styles/ProjectBackers.module.css"; 

const ProjectBackers = () => {
    const amountBacked = useSelector(state => state.backed.amountBacked)
    const backers = useSelector(state => state.backed.backers)
    let formatNum = new Intl.NumberFormat('en-US')
  return (
   <Card>
    <div className={classes.card}>
        <div className={classes.section}>
            <p className={classes.num}>${formatNum.format(amountBacked)}</p>
            <p className={classes.desc}>of $100,000 backed</p>
        </div>

        <div className={classes.separator}/>

        <div className={classes.section}>
            <p className={classes.num}>{formatNum.format(backers)}</p>
            <p className={classes.desc}>total backers</p>
        </div>

        <div className={classes.separator}/>

        <div className={classes.section}>
            <p className={classes.num}>56</p>
            <p className={classes.desc}>days left</p>
        </div>

        <progress value = {amountBacked} max = "100000"/>
    </div>
    </Card>
  )
}

export default ProjectBackers
