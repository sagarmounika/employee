import React, {useState, useEffect} from "react"
import {IoMdAddCircleOutline} from "react-icons/io"
import {Button} from "@material-tailwind/react"
import EmployeeList from "./EmployeeList"
import EmployeeForm from "./EmployeeForm"
const EmployeeDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    city: "",
    gender: "",
  })
  const [employees, setEmployees] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editIndex, setEditIndex] = useState(null)
  const [error, setError] = useState("")

  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem("employees"))
    if (savedEmployees) {
      setEmployees(savedEmployees)
    }
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.employeeId ||
      !formData.city ||
      !formData.gender
    ) {
      setError("Please fill in all fields.")
      return
    }

    if (editIndex !== null) {
      const updatedEmployees = [...employees]
      updatedEmployees[editIndex] = formData
      setEmployees(updatedEmployees)
      setEditIndex(null)
      localStorage.setItem("employees", JSON.stringify(updatedEmployees))
    } else {
      setEmployees([...employees, formData])
      localStorage.setItem("employees", JSON.stringify(employees))
    }
    setFormData({
      name: "",
      employeeId: "",
      city: "",
      gender: "",
    })
    setError("")
    setShowModal(false)
    console.log(employees, "--employees--")
  }

  const handleEdit = employee => {
    setFormData(employee)
    setShowModal(true)
    const editIndex = employees.findIndex(emp => emp === employee)
    setEditIndex(editIndex)
  }

  const handleDelete = employee => {
    const updatedEmployees = employees.filter(emp => emp !== employee)
    setEmployees(updatedEmployees)
    localStorage.setItem("employees", JSON.stringify(updatedEmployees))
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">Employees</div>

        <Button
          className="flex items-center gap-3"
          onClick={() => setShowModal(true)}
        >
          <span>
            <IoMdAddCircleOutline className="h-5 w-5" />
          </span>
          <span>Add Employee</span>
        </Button>
      </div>
      <EmployeeList
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <EmployeeForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        showModal={showModal}
        setShowModal={setShowModal}
        isEditMode={editIndex !== null}
        error={error}
      />
    </div>
  )
}

export default EmployeeDetails
