import React from 'react'
import { Formik ,Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';


const initialValues ={
    name:'', 
    email:'',
    password:'',
    phone:'',
    createdfor:'',
    isAwesome: false,
    jobType: ['designer'],
    location: [],
}

const validationSchema = Yup.object({
    name: Yup.string().max(15, 'Must be 15 char or less').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.number().required('Required')
})



const BasicDetails = () => {


    return (
        <>

        <h3 className="ui header">Basic Info</h3>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit= {(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
            {formik => (
                <Form className='ui form' onSubmit={formik.handleSubmit}>
    
                    <div className="field">
                        <label htmlFor="email">Email address</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" />        
                    </div>            
    
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" />     
                    </div>
    
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" />
                        <ErrorMessage name="password" />     
                    </div>
        
                    <div className="field">
                        <label htmlFor="phone">Phone</label>
                        <Field name="phone" type="number" />
                        <ErrorMessage name="phone" />     
                    </div>   

                    <div className="field">
                        <label htmlFor="createdfor">Profile created for</label>
                        <Field name="createdfor" as="select" className="my-select">
                            <option value="myself">Myself</option>
                            <option value='daughter'>Daughter</option>
                            <option value='son'>Son</option>
                            <option value='relative'>Relative</option>
                            <option value="brother">Brother</option>
                            <option value="sister">Sister</option>
                            <option value='friend'>Friend</option>
                        </Field>
                    </div>

                    <div className="field">
                        <label>
                            <Field type="checkbox" name="isAwesome" />
                            Are you awesome?
                        </label>
                    </div>
                    
                    <div className="field">
                        <div className="label">
                            What best describes you? (check all that apply)
                        </div>
                        <label>
                            <Field type="checkbox" name="jobType" value="designer" />
                            Designer
                        </label>
                        <label>
                            <Field type="checkbox" name="jobType" value="developer" />
                            Developer
                        </label>
                        <label>
                            <Field type="checkbox" name="jobType" value="product" />
                            Product Manager
                        </label>                        
                    </div>

                    <div className="field">
                        <label htmlFor="location">Where do you work?</label>
                        <Field
                            component="select"
                            id="location"
                            name="location"
                            multiple={true}
                        >
                            <option value="NY">New York</option>
                            <option value="SF">San Francisco</option>
                            <option value="CH">Chicago</option>
                            <option value="OTHER">Other</option>
                        </Field>                     
                    </div>


                <button type='submit' className='ui button'>Submit</button>
            </Form>
            )}
        </Formik>

        </>
    
  )
}

export default BasicDetails