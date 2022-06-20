![FSI Logo](https://fsi.ng/assets/img/main_logo.png)

# FSI JS SDK

  

### **`About FSI`**

Our essence is to support and grow a collaborative and innovative ecosystem of players in the financial services space. The association aims to lower barriers to entry, promote a level playing field for innovators without undermining the safety and security of the payment system for the general public and also advocate policies and regulations that encourage.

  

### **`Vision`**

To build, support and grow a collaborative and innovative ecosystem of players in the Financial Services space

  

### **`Introduction`**

This package provides services for integrating provider APIs into your application in written code. The sdk was built for easy access of the providers under FSI to be easily integrated into your development codebase.

  

### **`API Providers`**

This package has numerous API providers under FSI. You can find the API providers in your FSI sandbox dashboard (`https://fsi.ng/members/apis`) .

  

### **`Installation`**

- Clone this repository: `git clone https://github.com/fsi-dev/fsi-js-sdk`

- Install the dependencies: `npm install typescript --save-dev`

- Compile Typescript based on the configuration in the tsconfig.json file: `tsc`


## **`Usage`**

1.) `testKey` : The sandbox application key is located right inside the application sample that you created for your application. You click on the Applications section on the left menu of your dashboard to access all your applications:

  + Applicantions

- [My Applications](https://fsi.ng/members/my-applications)

2.) import the index file and declare store your testkey in the testkey viable and declare the provider that you wish to use in the provider variable. (Note: All provider available are in the providers folders)

3.) Every provider's functionality are defined in every files place in a provider's folder, You would need to make reference to the methods.

4.) To be able to pass data to a provider, you should view the provider's parameters in the [Codelab Section of the Sandbox](https://fsi.ng/members/apis) for the provider's documentation.
  


### **`Testing`**
 - Copy your `testkey` also know as `sandbox application key` from FSI sandbox and go to the SterlingBank.test.ts in the tests folder and replace the testkey with your sandbox key after creating a new application.
 - Go to terminal and make sure that you are on the project folder and run `npm run build && npm run test`

### **`Contributing`**

Please see our [Contribution Guide](https://docs.google.com/document/d/1qOXxA8IMm4xKo1LQd8Fodrn8Hk6VL70As5YTX9w_9yo/edit?usp=sharing) for details.

### **`Security`**

If you discover any security-related issues, please email info@fsi.ng instead of using the issue tracker.

  

### **`Contact Us`**

In the case of security vulnerabilities, bug detection and other development queries, you can contact info@fsi.ng and also you can call us on +2348033080471.