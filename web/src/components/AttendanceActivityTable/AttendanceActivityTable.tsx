import { RiFlag2Line } from '@remixicon/react'
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react'
const data = [
  {
    name: 'Alain Cherubin',
    Role: 'Software Developer',
    checkin: '08:02 AM',
    checkout: '05:23 PM',
    status: 'Present',
  },
  {
    name: 'D Dan',
    Role: 'Graphics Designer',
    checkin: '10:02 AM',
    checkout: '05:03 PM',
    status: 'Present',
  },
  {
    name: 'Viola Amherd',
    Role: 'Software Developer',
    checkin: '08:02 AM',
    checkout: '05:23 PM',
    status: 'Present',
  },
  {
    name: 'Viola Amherd',
    Role: 'Software Developer',
    checkin: '08:02 AM',
    checkout: '05:23 PM',
    status: 'Present',
  },
  {
    name: 'Viola Amherd',
    Role: 'Software Developer',
    checkin: '08:02 AM',
    checkout: '05:23 PM',
    status: 'Present',
  },
  {
    name: 'Viola Amherd',
    Role: 'Software Developer',
    checkin: '08:02 AM',
    checkout: '05:23 PM',
    status: 'Present',
  },
  {
    name: 'Viola Amherd',
    Role: 'Software Developer',
    checkin: '08:02 AM',
    checkout: '05:23 PM',
    status: 'Present',
  },
]

const AttendanceActivityTable = () => {
  return (
    <div>
      {' '}
      <h3 className="text-tremor-content-strong font-bold dark:text-dark-tremor-content-strong text-lg">
        Attendance Activity
      </h3>{' '}
      <Table className="mt-5">
        {' '}
        <TableHead>
          {' '}
          <TableRow>
            {' '}
            <TableHeaderCell>Name</TableHeaderCell>{' '}
            <TableHeaderCell>Role</TableHeaderCell>{' '}
            <TableHeaderCell>Check In </TableHeaderCell>{' '}
            <TableHeaderCell>Check Out </TableHeaderCell>{' '}
            <TableHeaderCell>Status</TableHeaderCell>{' '}
          </TableRow>{' '}
        </TableHead>{' '}
        <TableBody>
          {' '}
          {data.map((item) => (
            <TableRow key={item.name}>
              {' '}
              <TableCell>{item.name}</TableCell>{' '}
              <TableCell> {item.Role} </TableCell>{' '}
              <TableCell> {item.checkin} </TableCell>{' '}
              <TableCell> {item.checkout} </TableCell>{' '}
              <TableCell>
                {' '}
                <Badge color="emerald" icon={RiFlag2Line}>
                  {' '}
                  {item.status}{' '}
                </Badge>{' '}
              </TableCell>{' '}
            </TableRow>
          ))}{' '}
        </TableBody>{' '}
      </Table>{' '}
    </div>
  )
}

export default AttendanceActivityTable
