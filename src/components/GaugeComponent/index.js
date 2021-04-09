import React,{Component} from 'react';
import GaugeChart from 'react-gauge-chart'
import styles from '../../index.css';
import {ArrowUpOutlined,ArrowDownOutlined } from '@ant-design/icons'

class GaugeComponent extends Component{

    constructor(props) {
        super(props);
        this.state={
            data:null
        }
    }

    componentDidMount() {
        //api call
        let data=[
            {
            name:"checkout",
            value:".55",
            stops:{
                range:[.1,.2,.3,.4],
                color:["red","green","blue","yellow"]
            },
            variation:'35%',
            variationArrowColor:"red",
            historyApiUrl:"",
            NotifyApiUrl:"",
            gaugeUnits:"min",
            },
            {
                name:"checkout 1",
                value:".65",
                stops:{
                    range:[.5,.4,.1],
                    color:["red","green","blue"]
                },
                variation:'35%',
                variationArrowColor:"red",
                historyApiUrl:"",
                NotifyApiUrl:"",
                gaugeUnits:"min",
            }]
        this.setState({data:data})
    }

    render() {
        const {data}=this.state;
        return (<>
                {data?.map((item,index)=>
                    <div className={styles.gaugeClass}>
                        <GaugeChart id="gauge-chart2"
                        arcsLength={item.stops.range} //total count=1
                        colors={item.stops.color}
                        percent={item.value}
                        arcPadding={0}
                        needleColor="#345243"
                        />
                        <div className={styles.detail}>
                        <h5>{item.name}</h5>
                            {item.value?.includes('-')?<ArrowDownOutlined style={{color: item.variationArrowColor }}/>:<ArrowUpOutlined style={{ color: item.variationArrowColor }}/>}
                            <span>{item.variation}</span>
                        </div>
                        <div className={styles.detail}>
                            <button>History</button>
                            <button>Notify</button>
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default GaugeComponent;
