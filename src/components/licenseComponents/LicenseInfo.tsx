import React from 'react'

interface LicenseDescription {
	[license: string]: string
}

interface LicenseInfoProps {
	licenses: LicenseDescription
	selectedLicense: string | null
}

const LicenseInfo: React.FC<LicenseInfoProps> = ({
	licenses,
	selectedLicense
}) => {
	const description = selectedLicense ? licenses[selectedLicense] : null

	return (
		<div className='mt-4 bg-red-100 p-4 border rounded-md border-gray-200'>
			{description || 'Выберите лицензию для просмотра описания.'}
		</div>
	)
}

export default LicenseInfo
