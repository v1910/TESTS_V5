//MainReducer.js-----------------------------
// It is the store of the site

import React from "react";

import { AllTests } from './components/allTests/AllTests.js';

import {CorrectAnswersTests} from './components/correctAnswersTests/CorrectAnswersTests.js';

import {SOCIETYwords} from "./components/societyWords/society_words.js";
import {SPORTwords} from "./components/sportWords/sport_words.js";
import {ACCOMMODATIONwords} from "./components/accommodationWords/accommodation_words.js";
import {APPEARANCEwords} from "./components/appearanceWords/appearance_words.js";
import {PREPOSITIONSwords} from "./components/prepositionsWords/prepositions_words.js";
import {NATUREwords} from "./components/natureWords/nature_words.js";
import {Jokes} from "./components/jokes/Jokes.js";
import { insertAfter } from "./components/insertAfter/InsertAfter.js";

let workAllTest = AllTests(); // read all tests
//let workTest = workAllTest[0].length; // amount of questions in current test

let initialStore = 

{
	//initialisation -----------
    list_tests_wrapper: false, // show or hide (false) list_tests_wrapper
    state_reply: [], // state of reply
    state_button_close: [], // state of button close
    state_edit: true,
    stateTests: false,
    showHideTest: false,
    stateWords: false,
    stateListen: false,
    statePhrases: false,
    stateJokes: false,
    itemMenu1: "",
    itemMenu2: "",
	 words_files:  ["SOCIETY","SPORT","ACCOMMODATION", "APPEARANCE", "PREPOSITIONS", "NATURE"], // words files
	 words:  [], // words array
//	 all_words: [], // array of all words
// 	 jokes_arr: [], // jokes array
	 work_arr: [], // array of random numbers
	 count_pick_button_show_word:  0,  //count of picking button_show_word
	 count_pick_button_show_description:  0, //count of picking button_show_description
	 current_number_word:  0,  //current number word
	 current_number_word_group:  0, // current word group (SOCIETY)
	 count_pick_button_show_answer:  0,
	 nWords:  0, // quantity of words
//  	 nTests:  0, // quantity of tests
  	 

	 idioms_files:  ["JOB","HOT","MIX"], // idioms files
  	
	/* initialize variables */
	 count:  0, 
	 clearTime:  0, 
	 seconds:  0,
	 minutes:  0,
	 hours:  0, 
	 clearState:  0, 
	 secs:  0,
	 mins:  0,
	 gethours:  0, 


	// tests -----------------
     currentTest:  0, // current test

	 countDownDate:  new Date().getTime(), // start time for the chosing test

	 countDownDate_qst:  new Date().getTime(), // start time for the chosing question

  	 count_time_question:  null,  // all time for the current question

  	 count_time_test:  null, // all time for the current test

	 current_question:  0, // current question  ( 0  -  first)

	 X_setInterval:  0, // id of clearInterval

	 tests:  workAllTest, // read all tests

	 nTests:  workAllTest.length, // amount of all tetsts

	 cAnswers: CorrectAnswersTests(),  // read all correct answers
	
	 selected_answer: -1,  // number of the selected answer in the current question

	 state_tests: [], // test state

     state_green_red: [], //state of red or green color of an answer

     state_count_time_test: [], //state of count time test

     state_count_time_question: [], // state of count time question

     correct_answer: -1,  // number of the correct answer in the current question  

     firstTimer: null,  // = null only for first timer


     // words -----------------
     all_words: [SOCIETYwords(),SPORTwords(),ACCOMMODATIONwords(),APPEARANCEwords(),
                 PREPOSITIONSwords(),NATUREwords()], // array of all words

//	 all_words[0] = SOCIETYwords(),
//	 all_words[1] = SPORTwords(),
//	 all_words[2] = ACCOMMODATIONwords(),
//	 all_words[3] = APPEARANCEwords(),
//	 all_words[4] = PREPOSITIONSwords(),
//	 all_words[5] = NATUREwords(),

	 curent_number_word: 0,


	// LISTEN-READ --------------
	 nAudio: 3,  // amount of all audio files


	// jokes -----------------
	 jokes_arr: Jokes() // read all jokes
	

}; //initialStore  

let workInitialStore = initialStore;

initialStore.count_questions_test = workAllTest[workInitialStore.currentTest].length; // amount of questions in current test

initialStore.nJokes = workInitialStore.jokes_arr.length // amount of all jokes

initialStore.count_correct_answer = Array(initialStore.count_questions_test).fill(0);  // count of correct answers for every question
    
initialStore.count_time_question = Array(initialStore.count_questions_test).fill('00:00');  // all time for the current question
 
initialStore.count_time_test = Array(initialStore.count_questions_test).fill('00:00'); // all time for the current test


console.log('MainReducer: initialStore.count_time_test=',initialStore.count_time_test);
//console.log('MainReducer: initialStore.count_questions_test=',initialStore.count_questions_test);
console.log('MainReducer:--- init:  initialStore.current_question=',initialStore.current_question);  

function MainReducer(state = initialStore, action){
    console.log('MainReducer:--- action=',action);
    
//    console.log('MainReducer: state=',state);
//    console.log('MainReducer: initialStore.count_questions_test=',initialStore.count_questions_test);

    let payload = action.payload;

    switch(action.type) {
        // TESTS----------------------
        case 'HeaderTests_mouseEnter':       
            return {
                ...state,
                count_time_question:    payload.count_time_question, 
                count_time_test:        payload.count_time_test,
                list_tests_wrapper:     payload.list_tests_wrapper, 
                selected_answer:        payload.selected_answer, 
                correct_answer:         payload.correct_answer, 
                current_question:       payload.current_question,
                count_correct_answer:   payload.count_correct_answer, 
                currentTest:            payload.currentTest
            }
            case 'HeaderTests_mouseEnterList':       
            return {
                ...state,
                count_time_question:    payload.count_time_question, 
                count_time_test:        payload.count_time_test,
                list_tests_wrapper:     payload.list_tests_wrapper, 
                selected_answer:        payload.selected_answer, 
                correct_answer:         payload.correct_answer, 
                current_question:       payload.current_question,
                count_correct_answer:   payload.count_correct_answer, 
                currentTest:            payload.currentTest
            }
            

        case 'HeaderTests_mouseLeaveList':       
            return {
                ...state,
            list_tests_wrapper: payload.list_tests_wrapper
            }

            case 'HeaderTestsList':       
            return {
                ...state,
                currentTest: payload.currentTest, 
                showHideTest: payload.showHideTest,
                list_tests_wrapper: payload.list_tests_wrapper
            }

            case 'ShowCurrentTest_handleChange':       
            return {
                ...state,
                state_green_red:      payload.arr_state_green_red_new, 
                state_tests:          payload.arr_state_test_new,
                current_question:     payload.current_question,
                selected_answer:      payload.selected_answer,
                count_correct_answer: payload.count_correct_answer,
                firstTimer:           payload.firstTimer
            }
            
            case 'ShowCurrentTest_startWatch4':       
            return {
                ...state,            
                count_time_question:    payload.count_time_question, 
                count_time_test:        payload.count_time_test
            }

            case 'ShowCurrentTest':       
            return {
                ...state,            
                countDownDate_qst: payload.countDownDate_qst 
            }

            case 'footerQuestion_why':       
            return {
                ...state,            
                state_reply:        payload.arr_state_reply_new,
                state_button_close: payload.arr_state_button_close_new
            }

            case 'footerQuestion_answer_close':       
            return {
                ...state,            
                state_reply:        payload.arr_state_reply_new,
                state_button_close: payload.arr_state_button_close_new,
                showHideTest:       payload.showHideTest, 
                list_tests_wrapper: payload.list_tests_wrapper
            }
            

/*
        case 'SET_TESTS':       
        
            let state_tests, showHideTest, list_tests_wrapper, state_edit,
                content_test, state_reply, state_button_close, X_setInterval,
                countDownDate_qst, countDownDate, current_question,
                selected_answer,count_time_question, count_time_test, firstTimer;

            let payload = action.payload;
            
            if(typeof action.state_tests === 'undefined') state_tests = state.state_tests
            else state_tests = payload.state_tests;
                
            if(typeof payload.showHideTest === 'undefined') showHideTest = state.showHideTest
            else showHideTest = payload.showHideTest;

            if(typeof payload.list_tests_wrapper === 'undefined') list_tests_wrapper = state.list_tests_wrapper
            else list_tests_wrapper = payload.list_tests_wrapper;

            if(typeof payload.state_edit === 'undefined') state_edit = state.state_edit
            else state_tests = payload.state_tests;

            if(typeof payload.content_test === 'undefined') content_test = state.content_test
            else content_test = payload.content_test;

            if(typeof payload.state_reply === 'undefined') state_reply = state.state_reply
            else state_reply = payload.state_reply;

            if(typeof payload.state_button_close === 'undefined') state_button_close = state.state_button_close
            else state_button_close = payload.state_button_close;

            if(typeof payload.X_setInterval === 'undefined') X_setInterval = state.X_setInterval
            else X_setInterval = payload.X_setInterval;
            
            if(typeof payload.countDownDate_qst === 'undefined') countDownDate_qst = state.countDownDate_qst
            else countDownDate_qst = payload.countDownDate_qst;

            if(typeof payload.count_time_test === 'undefined') count_time_test = state.count_time_test
            else count_time_test = payload.count_time_test;

            if(typeof payload.countDownDate === 'undefined') countDownDate = state.countDownDate
            else countDownDate = payload.countDownDate; 

            if(typeof payload.current_question === 'undefined') current_question = state.current_question
            else current_question = payload.current_question;

            if(typeof payload.selected_answer === 'undefined') selected_answer = state.selected_answer
            else selected_answer = payload.selected_answer;


            if(typeof payload.count_time_test === 'undefined') count_time_test = state.count_time_test
            else count_time_test = payload.count_time_test;
            
            if(typeof payload.count_time_question === 'undefined') count_time_question = state.count_time_question
            else count_time_question = payload.count_time_question;            
            
            if(typeof payload.firstTimer === 'undefined') firstTimer = state.firstTimer
            else firstTimer = payload.firstTimer;  
//            console.log('MainReducer: SET_TESTS payload.showHideTest=', payload.showHideTest);  
//            console.log('MainReducer: SET_TESTS payload.list_tests_wrapper=', payload.list_tests_wrapper);  
//            console.log('MainReducer: SET_TESTS payload.content_test=', payload.content_test);  


console.log('MainReducer:--- current_question=',current_question);  

            return {
                ...state,
                state_tests:        state_tests,
                showHideTest:       showHideTest,
                list_tests_wrapper: list_tests_wrapper,
                state_edit:         state_edit,
                content_test:       content_test,
                state_reply:        state_reply,
                state_button_close: state_button_close,
                X_setInterval:      X_setInterval,
                countDownDate_qst:  countDownDate_qst,
                count_time_question:count_time_question,
                count_time_test:    count_time_test,
                current_question:   current_question,
                countDownDate:      countDownDate,
                countDownDate_qst:  countDownDate_qst,
                selected_answer:    selected_answer,
                firstTimer:         firstTimer,
                

                stateWords: "empty",
                stateListen: "empty",
                statePhrases: "empty",
                stateJokes: "empty"
            };
*/

        case 'SET_WORDS': 
/*        
            if(!((document.getElementById('words_wrapper') === 'underfined') || 
                 (document.getElementById('words_wrapper') === null)))               
                document.getElementById('words_wrapper').value = '';
            if(!((document.getElementById('listen_wrapper') === 'underfined') || 
                 (document.getElementById('listen_wrapper') === null)))               
                document.getElementById('listen_wrapper').value = '';
            if(!((document.getElementById('phrases_wrapper') === 'underfined') || 
                 (document.getElementById('phrases_wrapper') === null)))               
                document.getElementById('phrases_wrapper').value = '';
            if(!((document.getElementById('jokes_wrapper') === 'underfined') || 
                 (document.getElementById('jokes_wrapper') === null)))               
                document.getElementById('jokes_wrapper').value = '';
            if(!((document.getElementById('list_words_wrapper') === 'underfined') || 
                 (document.getElementById('list_words_wrapper') === null)))                        
                document.getElementById('list_words_wrapper').style.visibility = action.list_words_wrapper;
            if(!((document.getElementById('list_listen_wrapper') === 'underfined') || 
                 (document.getElementById('list_listen_wrapper') === null)))               
                document.getElementById('list_listen_wrapper').style.visibility = action.list_listen_wrapper;
            if(!((document.getElementById('list_phrases_wrapper') === 'underfined') || 
                 (document.getElementById('list_phrases_wrapper') === null)))               
                document.getElementById('list_phrases_wrapper').style.visibility = action.list_listen_wrapper;     
*/                
            return {
                ...state,
                stateTests: "empty",
                stateWords: "full",
                stateListen: "empty",
                statePhrases: "empty",
                stateJokes: "empty",
            };
        case 'SET_LISTEN': 
/*        
            document.getElementById('tests_wrapper').value = '';
            document.getElementById('words_wrapper').value = '';
            document.getElementById('listen_wrapper').value = '';
            document.getElementById('phrases_wrapper').value = '';
            document.getElementById('jokes_wrapper').value = '';
*/            
            return {
                ...state,
                stateTests: "empty",
                stateWords: "empty",
                stateListen: "full",
                statePhrases: "empty",
                stateJokes: "empty",
            };
        case 'SET_PHRASES': 
/*        
            document.getElementById('tests_wrapper').value = '';
            document.getElementById('words_wrapper').value = '';
            document.getElementById('listen_wrapper').value = '';
            document.getElementById('phrases_wrapper').value = '';
            document.getElementById('jokes_wrapper').value = '';
*/            
            return {
                ...state,
                stateTests: "empty",
                stateWords: "empty",
                stateListen: "empty",
                statePhrases: "full",
                stateJokes: "empty",
            };
        case 'SET_JOKES': 
/*        
            document.getElementById('tests_wrapper').value = '';
            document.getElementById('words_wrapper').value = '';
            document.getElementById('listen_wrapper').value = '';
            document.getElementById('phrases_wrapper').value = '';
            document.getElementById('jokes_wrapper').value = '';
*/            
            return {
                ...state,
                stateTests: "empty",
                stateWords: "empty",
                stateListen: "empty",
                statePhrases: "empty",
                stateJokes: "full",
            };
            
        default:
            return state;

    } //switch

    return state;   
   
//return null;
}; //end of MainReducer---------------------------


export default MainReducer;




