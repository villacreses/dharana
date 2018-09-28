import React, {Component} from 'react';

export default class Button extends Component {

  static Cancel ({onClick}) {
    return (
      <a href="" className="btn btn-sm text-secondary" onClick={onClick}>
        Cancel
      </a>
    )
  }

  static Submit ({text}) {
    return (
      <input
        type="submit"
        className="btn btn-primary btn-sm"
        value={text || 'Submit'}
      />
    );
  }

  static Row ({children}) {
    return (
      <div className="d-flex flex-row pl-1 pt-1">
        {children}
      </div>
    )
  }
}
