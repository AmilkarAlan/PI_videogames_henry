import style from './SelectOptions.module.css'

const SelectOptions = ({ name, value, onChange, options, label, type, shape, checked }) => {
    return (
        <div>
            { label }
            { type === "input" ? (
                < div className={ style.inputWrapped }>
                    <div className={ style.inputContainer }>
                        {

                            options.map((o) => (
                                <div className={ style.inputBox } key={ o.id }>
                                    <input 
                                    type={ shape } 
                                    id={o.id}
                                    name={ name } 
                                    value={o.name} onChange={ onChange } />
                                    <label className={ style.inputName } />
                                    { o.name }


                                </div>
                            ))
                        }
                    </div>
                </div>
            ) : (
                <select
                    id={ name }
                    name={ name }
                    value={ value }
                    onChange={ onChange }

                >

                    <option value="">{ label }</option>
                    { options.map((o) => (
                        <option value={ o.index ? o.index : o } key={ o.name ? o.name : o }>
                            { o.name ? o.name : o }
                        </option>
                    )) }
                </select>
            ) }
        </div >
    )
}

export default SelectOptions