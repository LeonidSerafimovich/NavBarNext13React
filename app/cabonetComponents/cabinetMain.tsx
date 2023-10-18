import PhotoUploadForm from './addphoto'
import CabinetSettings from './cabinetSettings'

function CabinetMain() {
	return (
		<div className='flex justify-center bg-slate-100'>
			<div className='mr-8 ml-8 mt-8'>
				<PhotoUploadForm />
			</div>
			<div className='mt-8'>
				<CabinetSettings />
			</div>
		</div>
	)
}
export default CabinetMain
