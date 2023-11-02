'use client'

import React from 'react'
import DropDawnLicense from './DropDawnlicense'

function LicenseMain() {
	const List = ['ЛОа', 'ЛОПа', 'ЛПа', 'ЛГа', 'ЛНа']
	const licenses = {
		ЛОа: 'Газовое оружие',
		ЛОПа: 'Травматиеское оружие (ОООП)',
		ЛПа: 'Лицензия на пневматическое оружие с мощностью свыше 7,5 Дж',
		ЛГа: 'Гладкоствольное оружие',
		ЛНа: 'Нарезное оружие'
		// Другие лицензии и их описания
	}

	const handleSelectChange = (selectedValue: string) => {
		console.log('Selected value:', selectedValue)
	}
	return (
		<div className=''>
			<DropDawnLicense
				predefinedValues={List}
				defaultText='Выбирите лицензию'
				licenses={licenses}
			/>
		</div>
	)
}

export default LicenseMain
