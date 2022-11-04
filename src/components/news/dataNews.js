import React , {PureComponent} from "react"
import {Row , Col , Button, Card ,Container} from 'react-bootstrap'
import Axios from "./axios";
import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
//import qs from 'querystring';

class dataNews extends PureComponent{
    constructor(props){
        super(props)
        this.state ={
            berita : [],
            response : '',
            display :'none'

        }
    }

    componenDidMount(){
        axios.get(api+'/everything?q=bitcoin&apiKey=8ff25637c0324ee1b6d21e49a849f873').then(res=>{
            this.setState({
                berita : res.data.values
            })       

        })
        console.log(berita)
    }
    render(){
        return{

        }
    } 
}