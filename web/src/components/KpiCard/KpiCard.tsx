import { ArrowUpOutlined } from '@ant-design/icons'
import { Statistic } from 'antd'
const KpiCard = () => {
  return (
    <div className="flex rounded-md border p-10 shadow-md">
      <Statistic
        title="Active"
        value={11.28}
        precision={2}
        valueStyle={{ color: 'green', fontWeight: 'bold' }}
        prefix={<ArrowUpOutlined />}
        suffix="%"
      />
    </div>
  )
}

export default KpiCard
