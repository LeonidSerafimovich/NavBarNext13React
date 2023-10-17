import PhotoUploadForm from './addphoto'
import CabinetSettings from './cabinetSettings'

function CabinetMain() {
	return (
		<div className='flex'>
			<PhotoUploadForm />
			<CabinetSettings />
		</div>
	)
}
export default CabinetMain
