import React from 'react'

interface LicenseDescription {
	[license: string]: string
}

interface LicenseInfoProps {
	licenses: LicenseDescription
	selectedLicense: string | null
}

const AllowInfo: React.FC<LicenseInfoProps> = ({
	licenses,
	selectedLicense
}) => {
	const description = selectedLicense ? licenses[selectedLicense] : null

	return (
		<div className='mt-4 bg-red-100 p-4 border rounded-md border-gray-200'>
			{description || 'Выберите разрешение для просмотра описания.'}
		</div>
	)
}

export default AllowInfo
