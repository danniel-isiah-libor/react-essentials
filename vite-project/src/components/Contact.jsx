import { useState, useEffect, createContext } from 'react'
import Component1 from './Component1'

const Component3 = createContext()

export { Component3 }

export default function Contact() {
    const fields = {
        email: '',
        message: ''
        // add more fields here
    }

    const [form, setForm] = useState(fields)

    useEffect(()  => {
        console.log('I am being triggered!');
    }, [form])

    // useEffect(function () {
    //     console.log('I am being triggered!');
    // }, [form])
    
    function handle(event) {
        event.preventDefault()
        alert(`Email: ${form.email}, Message: ${form.message}`)
        //perform validation
        // save to database
    }

    function onFormChange(event) {
        const newFormValues = {
            ...form,
            [event.target.name]: event.target.value
        }

        setForm(newFormValues)

        // perform validation here...
    }

  return (
    <Component3.Provider value={form}>
        <form onSubmit={handle}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                    </label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            name="email"
                            onChange={onFormChange}
                            type="email"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    </div>

                    <div className="col-span-full">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        Message
                    </label>
                    <div className="mt-2">
                        <textarea
                        name="message"
                        onChange={onFormChange}
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Save
                </button>
            </div>
        </form>

        <Component1 />
    </Component3.Provider>
  )
}
