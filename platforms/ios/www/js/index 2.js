/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function myMsgClickHandler(msg){
	//alert('hi');
	var json_data= JSON.stringify(msg);
	//alert("json_data "+json_data);
	var json_obj= JSON.parse(json_data);
	var str_message=json_obj.m;
	//alert("message is : "+str_message);
	var json_data= JSON.parse(str_message);
	//alert("status is : "+ json_data.status);
	var status=json_data.status;
	if(status=="accept")
	{
		var pid=json_data.pid;
		var jid=json_data.jid;
		//alert("status is : "+ pid);
		//alert("status is : "+ jid);
		sessionStorage.setItem('acceptstatus', status);
		sessionStorage.setItem('notificationpid', pid);
		sessionStorage.setItem('jid', jid);
		window.location="slide6.html";
		
	}
	else if(status=="decline")
	{
		//alert("i am in decline");
		var pid=json_data.pid;
		sessionStorage.setItem('notificationpid', pid);
		window.location="slide2.html";
	}
	else if(status=="cancel")
	{
		var pid=json_data.pid;
		var jid=json_data.jid;
		sessionStorage.setItem('notificationpid', pid);
		sessionStorage.setItem('jid', jid);
		window.location="slide6.html";
	}
}
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        if (PushbotsPlugin.isAndroid()) {
            PushbotsPlugin.initializeAndroid('55eda7a7177959bc1c8b4567', '423493743218');
        } else if (PushbotsPlugin.isiOS()) {
            PushbotsPlugin.initializeiOS('56188b0817795981228b4571');
        }
        PushbotsPlugin.getToken(function(token){
        	//alert(token);
        	localStorage.setItem('token', token);
           
        });
        
        PushbotsPlugin.onNotificationClick(myMsgClickHandler);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();