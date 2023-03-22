import { Button, Grid, TextField } from "@mui/material";
import { useContext, useState } from "react";
import Compress from 'compress.js'
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function AddPlant() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [soilTypes, setSoilTypes] = useState('');
    const [sunRequirements, setSunRequirements] = useState('');
    const [flowerTime, setFlowerTime] = useState('');
    const [file, setFile] = useState([]);
    const { user, dispatch } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const compressor = new Compress();
        var compressedFile;
        try {
            compressedFile = await compressor.compress(file, {
                maxSizeKB: 120,
                useWebWorker: true
            });

        } catch (err) {
            console.log(err)
        }
        axios.post('http://localhost:8080/plant/addPlant', {
            auth: {
                authToken: user.user.auth.token
            },
            payload: {
                name: name,
                description: description,
                soilTypes: soilTypes,
                sunRequirements: sunRequirements,
                flowerTime: flowerTime,
                image: {
                    name: compressedFile[0].alt,
                    img: compressedFile[0].data
                }
            }
        }
        )
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err);
            })

    }
    return (
        // user.isLoading ?
        // <Box sx={{
        //   display: 'flex',
        //   height: '100vh',
        //   justifyContent: 'center',
        //   alignItems: 'center'
        // }}>
        //   <CircularProgress />
        // </Box>
        // :
        <form
            style={{
                height: '100vh',
                width: '100vw',

                display: 'flex',

                alignItems: 'center',
                justifyContent: 'center'
            }}

            onSubmit={(e) => handleSubmit(e)}>
            <Grid sx={{ width: '45%' }} container >
                <Grid item xs={12} md={6} p={1}>
                    <TextField
                        fullWidth
                        required
                        label="Plant Name"
                        variant="outlined"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6} p={1}>
                    <TextField
                        fullWidth
                        required
                        label="Description"
                        variant="outlined"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6} p={1}>
                    <TextField
                        fullWidth
                        required
                        label="Soil Types"
                        variant="outlined"
                        value={soilTypes}
                        onChange={(event) => setSoilTypes(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6} p={1}>
                    <TextField
                        fullWidth
                        required
                        label="Sun Requirements"
                        variant="outlined"
                        value={sunRequirements}
                        onChange={(event) => setSunRequirements(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6} p={1}>
                    <TextField
                        fullWidth
                        required
                        label="Flower Time"
                        variant="outlined"
                        value={flowerTime}
                        onChange={(event) => setFlowerTime(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6} p={1}>
                    <TextField
                        inputProps={{ shrink: true }}
                        type='file'
                        fullWidth
                        required
                        label="Image"
                        variant="outlined"
                        onChange={(event) => setFile(Array.from(event.target.files))}
                    />
                </Grid>
                <Grid textAlign={"center"} item xs={12} p={1}>
                    <Button fullWidth variant="contained" color="primary" type="submit">
                        ADD
                    </Button>
                </Grid>
                {/* {
                    user.err
                    &&
                    <Grid textAlign={"center"} item xs={12} p={1}>
                        <Typography color={'error'} variant="subtitle1">{user.err}</Typography>
                    </Grid>
                } */}
            </Grid>
        </form>
    );
}

export default AddPlant;