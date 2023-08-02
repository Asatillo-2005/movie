import "./user.scss"
import { useState, useRef } from "react"
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';



function User() {

    const toast = useRef(null);
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState()
    const [img, setImg] = useState()
    const [year, setYear] = useState()
    const [time, setTime] = useState()
    const [gener, setGener] = useState()
    const [desc, setDesc] = useState()
    const [bg, setBg] = useState()
    const [quality, setQuality] = useState()
    const [rating, setRating] = useState()
    const [url, setUrl] = useState()
    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3000 });
    }

    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
    }

    const data = { 'name': name, 'img': img, 'year': year, 'time': time, 'gener': gener, 'desc': desc, 'bg': bg, 'rating': rating, 'quality': quality, 'url': url }

    function onSubmit(evt) {
        evt.preventDefault()

        if (name == "" || img == "" || bg == "" || year == "" || time == "" || gener == "" || desc == "" || quality == "" || rating == "" || url == "") {
            console.log("error");
            showError()
        }
        else {
            setLoading(true);
            fetch("https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }).then(res => {
                setLoading(false)
                showSuccess()
                setName('')
                setImg('')
                setBg('')
                setDesc('')
                setGener('')
                setQuality('')
                setRating('')
                setUrl('')
                setYear('')
                setTime('')
            })
        }

    }

    return (
        <section className="user-section">
            <div className="container">
                <Toast ref={toast} />
                <div className="user-box">
                    <form className="user-form">
                        <input className="-user-form-input" type="text" placeholder="name" value={name} onChange={((e) => { setName(e.target.value) })} />
                        <input className="-user-form-input" type="text" placeholder="img" value={img} onChange={((e) => { setImg(e.target.value) })} />
                        <input className="-user-form-input" type="text" placeholder="bg" value={bg} onChange={((e) => { setBg(e.target.value) })} />
                        <input className="-user-form-input" type="text" placeholder="year" value={year} onChange={((e) => { setYear(e.target.value) })} />
                        <input className="-user-form-input" type="text" placeholder="time" value={time} onChange={((e) => { setTime(e.target.value) })} />
                        <input className="-user-form-input" type="text" placeholder="gener" value={gener} onChange={((e) => { setGener(e.target.value) })} />
                        <input className="-user-form-input" type="text" placeholder="desc" value={desc} onChange={((e) => { setDesc(e.target.value) })} />
                        <input className="-user-form-input" type="text" placeholder="quality" value={quality} onChange={((e) => { setQuality(e.target.value) })} />
                        <input className="-user-form-input" type="text" placeholder="rating" value={rating} onChange={((e) => { setRating(e.target.value) })} />
                        <input className="-user-form-input" type="text" placeholder="url" value={url} onChange={((e) => { setUrl(e.target.value) })} />
                        <Button label="Submit" icon="pi pi-check" loading={loading} onClick={onSubmit} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default User