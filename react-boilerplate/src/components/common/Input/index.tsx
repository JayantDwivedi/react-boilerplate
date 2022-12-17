import { FormLabel, TextField, TextFieldProps } from '@mui/material';

const Input = ({ label, variant = 'standard', ...props }: TextFieldProps) => (
	<>
		{label && (
			<FormLabel sx={{ color: '#F37B21', fontWeight: 500 }}>{label}</FormLabel>
		)}
		<TextField
			fullWidth
			label=''
			variant={variant}
			hiddenLabel
			InputLabelProps={{ shrink: false }}
			{...props}
		/>
	</>
);

export default Input;
