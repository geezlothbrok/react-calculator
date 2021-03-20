function Calculator () {
    return(
        <div className="container">
        <div className="row">
            <div className="col-md-12 zero">
                 0
            </div>
        </div>

        <div className="row">
            <div className="col-md-3 ac">
                AC
            </div>
            <div className="col-md-3 ac">
                +/-
            </div>
            <div className="col-md-3 ac">
                %
            </div>
            <div className="col-md-3 symbol">
                ÷
            </div>
        </div>

        <div className="row">
            <div className="col-md-3 ac">
                7
            </div>
            <div className="col-md-3 ac">
                8
            </div>
            <div className="col-md-3 ac">
                9
            </div>
            <div className="col-md-3 symbol">
                x
            </div>
        </div>

        <div className="row">
            <div className="col-md-3 ac">
                4
            </div>
            <div className="col-md-3 ac">
                5
            </div>
            <div className="col-md-3 ac">
                6
            </div>
            <div className="col-md-3 symbol">
                -
            </div>
        </div>

        <div className="row">
            <div className="col-md-3 ac">
                1
            </div>
            <div className="col-md-3 ac">
                2
            </div>
            <div className="col-md-3 ac">
                3
            </div>
            <div className="col-md-3 symbol">
                +
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 ac">
                0
            </div>
                <div className="col-md-3 ac">
                .
                </div>
                <div className="col-md-3 symbol">
                =
                </div>
        </div>
    </div>
  
    )
};

export default Calculator;