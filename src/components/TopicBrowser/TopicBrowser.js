import React, { Component } from 'react';

//Topics
import EvenAndOdd from '../Topics/EvenAndOdd'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'

export default class TopicBrowser extends Component {

    render() {
        return (
            <div>
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>
        )
    }
}
