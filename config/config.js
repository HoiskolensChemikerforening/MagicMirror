/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "clock",
			position: "top_left"
		},
		{
    		module: "MMM-Entur-tavle",
    		position: "top_left",
    		config: {
        	stopId: '41620',
        	stopType: 'StopPlace',
        	numResults: 8,
        	showName: true,
        	highlightRealtime: true,
        	delay: [5, 'minutes'],
        	exclusions: [ 'a1', 'a2' , 'a3' ],
        	}
		},
		{
    		module: "MMM-Entur-tavle",
    		position: "top_left",
    		config: {
        	stopId: '44085',
        	stopType: 'StopPlace',
        	numResults: 8,
        	showName: true,
        	highlightRealtime: true,
        	delay: [5, 'minutes'],
        	exclusions: [ 'a1', 'a2' , 'a3' ],
        	}
		},
		/* Sandvika stasjon
		{
    		module: "MMM-Entur-tavle",
    		position: "top_right",
    		config: {
        	stopId: '610',
        	stopType: 'StopPlace',
        	numResults: 5,
        	showName: true,
        	highlightRealtime: true,
        	delay: [5, 'minutes'],
        	exclusions: [ 'a1', 'a2' , 'a3' ],
        	}
		},

		Billingstad stasjon

		{
    		module: "MMM-Entur-tavle",
    		position: "top_left",
    		config: {
        	stopId: '577',
        	stopType: 'StopPlace',
        	numResults: 5,
        	showName: true,
        	highlightRealtime: true,
        	delay: [5, 'minutes'],
        	exclusions: [ 'a1', 'a2' , 'a3' ],
        	}
		},

		Billingstadveien

		{
    		module: "MMM-Entur-tavle",
    		position: "top_left",
    		config: {
        	stopId: '4437',
        	stopType: 'StopPlace',
        	numResults: 5,
        	showName: true,
        	highlightRealtime: true,
        	delay: [5, 'minutes'],
        	exclusions: [ 'a1', 'a2' , 'a3' ],
        	}
		},
		{
			module: 'MMM-YrThen',
			position: 'center',
			header: 'Billingstad',
			config: {
			location: '1-2235258',
		}
		},
		*/
		{
			module: 'MMM-YrNow',
			position: 'top_right',
			header: 'Gløshaugen',
			config: {
			locationId: '5-68173',
        	showWeatherForecast: true
		}
		},
		{
			module: 'MMM-YrThen',
			position: 'top_right',
			header: 'Gløshaugen',
			config: {
			location: '5-68173',
		}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
