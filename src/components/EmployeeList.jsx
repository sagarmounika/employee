import React from "react"
import {Card, Typography, Button} from "@material-tailwind/react"
import {RiEdit2Fill, RiDeleteBin6Fill} from "react-icons/ri"
const TABLE_HEAD = ["Name", "ID", "City", "Gender", "", ""]

const EmployeeList = ({employees, onEdit, onDelete}) => {
  return (
    <ul>
      <Card className="h-full w-full">
        <table className="w-full min-w-max  text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "even:bg-blue-gray-50/50" : ""}
              >
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {employee.name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {employee.employeeId}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {employee.city}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {employee.gender}
                  </Typography>
                </td>
                <td className="p-4">
                  <Button
                    size="sm"
                    color="blue-gray"
                    className="font-medium mx-auto text-xs flex items-center gap-3"
                    onClick={() => onEdit(employee)}
                  >
                    <span>Edit </span>
                    <span>
                      <RiEdit2Fill className="h-full w-full" />
                    </span>
                  </Button>
                </td>
                <td className="p-4 ">
                  <Button
                    size="sm"
                    color="red"
                    className="font-medium mx-auto text-xs flex items-center justify-center gap-3"
                    onClick={() => onDelete(employee)}
                  >
                    {/* <span>Delete</span> */}
                    <span>
                      <RiDeleteBin6Fill className="h-full w-full" />
                    </span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </ul>
  )
}

export default EmployeeList
